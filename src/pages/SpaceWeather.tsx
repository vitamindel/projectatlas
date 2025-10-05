// SolarSystem.tsx
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
// Note: You might need to install this for the lens flare effect: npm install three-stdlib
import { Lensflare, LensflareElement } from "three-stdlib";

import { Navigation } from "@/components/Navigation"; // Assuming these components exist
import { SpaceWeatherDashboard } from "@/components/SpaceWeatherDashboard";

// --- Data & Types -----------------------------------------------------------
// Using more realistic (but scaled) data for our solar system
const AU = 15; // An "Astronomical Unit" for our scene scale

const planetData = [
  { name: "Mercury", size: 0.38, distance: AU * 0.4, orbitalSpeed: 1.6, textureUrl: "/textures/mercury.jpg" },
  { name: "Venus", size: 0.95, distance: AU * 0.7, orbitalSpeed: 1.2, textureUrl: "/textures/venus.jpg" },
  {
    name: "Earth",
    size: 1,
    distance: AU * 1,
    orbitalSpeed: 1,
    textureUrl: "/textures/earth_day.jpg",
    specularMapUrl: "/textures/earth_specular.png", // For shiny oceans
    nightTextureUrl: "/textures/earth_night.jpg", // City lights
    cloudTextureUrl: "/textures/earth_clouds.jpg",
  },
  { name: "Mars", size: 0.53, distance: AU * 1.5, orbitalSpeed: 0.8, textureUrl: "/textures/mars.jpg" },
  { name: "Jupiter", size: 4.5, distance: AU * 2.8, orbitalSpeed: 0.4, textureUrl: "/textures/jupiter.jpg" },
  {
    name: "Saturn",
    size: 3.8,
    distance: AU * 4.0,
    orbitalSpeed: 0.3,
    textureUrl: "/textures/saturn.jpg",
    ringTextureUrl: "/textures/saturn_ring.png",
  },
  { name: "Uranus", size: 2.0, distance: AU * 5.2, orbitalSpeed: 0.2, textureUrl: "/textures/uranus.jpg" },
  { name: "Neptune", size: 1.9, distance: AU * 6.5, orbitalSpeed: 0.15, textureUrl: "/textures/neptune.jpg" },
];

// --- Shaders (largely unchanged, but we'll use them for the Sun) ---------
const sunVertex = `
  varying vec3 vPos;
  void main() {
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const noiseFns = `
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1); p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float noise(vec3 x) {
    vec3 p = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
    float n = mix(mix(mix(hash(p+vec3(0,0,0)), hash(p+vec3(1,0,0)),f.x), mix(hash(p+vec3(0,1,0)), hash(p+vec3(1,1,0)),f.x),f.y),
                  mix(mix(hash(p+vec3(0,0,1)), hash(p+vec3(1,0,1)),f.x), mix(hash(p+vec3(0,1,1)), hash(p+vec3(1,1,1)),f.x),f.y), f.z);
    return n;
  }
  float fbm(vec3 p) {
    float v=0.0; float a=0.5;
    for (int i=0; i<5; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }
`;
const sunFragment = `
  uniform float uTime;
  uniform sampler2D uTexture;
  uniform vec3 uFlarePos[4];
  uniform float uFlarePower[4];
  varying vec3 vPos;
  ${noiseFns}

  void main() {
    vec3 nPos = normalize(vPos);
    float t = uTime * 0.2;
    
    // Base texture mixed with procedural noise for a dynamic surface
    float noise = fbm(nPos * 5.0 + vec3(t * 0.2));
    vec3 texColor = texture2D(uTexture, nPos.xy * 0.5 + 0.25).rgb;
    vec3 baseColor = texColor * (1.0 + noise * 0.6);

    // Flare contribution
    float flareAccum = 0.0;
    for (int i=0; i<4; i++){
      vec3 fpos = normalize(uFlarePos[i]);
      float d = 1.0 - smoothstep(0.0, 0.55, distance(nPos, fpos));
      flareAccum += d * uFlarePower[i];
    }
    
    vec3 finalColor = baseColor + vec3(1.0, 0.8, 0.4) * flareAccum;

    // Rim lighting for a glowing edge
    float rim = pow(1.0 - dot(normalize(cameraPosition - vPos), nPos), 3.0);
    finalColor += vec3(1.0, 0.6, 0.2) * rim * 0.8;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// --- Sun Component ---------------------------------------------------------
function Sun({ onRegisterFlare }: { onRegisterFlare: (spawn: (f: any) => void) => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  const lightRef = useRef<THREE.PointLight>(null!);
  const sunTexture = useLoader(TextureLoader, "/textures/sun.jpg");

  const flares = useRef(Array.from({ length: 4 }, () => ({ pos: new THREE.Vector3(0, 1, 0), power: 0 })));

  useEffect(() => {
    onRegisterFlare((flare: any) => {
      let idx = flares.current.findIndex(f => f.power < 0.1);
      if (idx === -1) idx = 0; // Overwrite the oldest if all are active

      const lat = typeof flare.lat === "number" ? flare.lat : (Math.random() - 0.5) * 180;
      const lon = typeof flare.lon === "number" ? flare.lon : (Math.random() - 0.5) * 360;
      const theta = (90 - lat) * (Math.PI / 180.0);
      const phi = (lon + 180) * (Math.PI / 180.0);
      const p = new THREE.Vector3(
        -Math.sin(theta) * Math.cos(phi),
        Math.cos(theta),
        Math.sin(theta) * Math.sin(phi)
      );
      flares.current[idx].pos.copy(p);
      flares.current[idx].power = Math.min(2.0, 0.5 + (flare.intensity || 1) * 1.0);
    });
  }, [onRegisterFlare]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = t;
      const powerArray = flares.current.map(f => {
        f.power *= 0.985; // Faster decay
        return f.power;
      });
      matRef.current.uniforms.uFlarePos.value = flares.current.map(f => f.pos);
      matRef.current.uniforms.uFlarePower.value = powerArray;
    }
    if (meshRef.current) meshRef.current.rotation.y += 0.0008;
  });

  const uniforms = {
    uTime: { value: 0.0 },
    uTexture: { value: sunTexture },
    uFlarePos: { value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] },
    uFlarePower: { value: [0.0, 0.0, 0.0, 0.0] },
  };

  // Create a cinematic lens flare
  const textureLoader = new TextureLoader();
  const textureFlare0 = textureLoader.load("/textures/lensflare0.png");
  const textureFlare3 = textureLoader.load("/textures/lensflare3.png");
  const lensflare = new Lensflare();
  lensflare.addElement(new LensflareElement(textureFlare0, 700, 0, new THREE.Color(0xffffff)));
  lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
  lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
  lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
  lensflare.addElement(new LensflareElement(textureFlare3, 70, 1.0));

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.add(lensflare);
    }
  }, [lensflare]);

  return (
    <group>
      <pointLight ref={lightRef} intensity={2500} distance={AU * 10} decay={2} castShadow />
      <mesh ref={meshRef} scale={4.0}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={sunVertex}
          fragmentShader={sunFragment}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
}

// --- Planet Component (Texture-based) --------------------------------------
function Planet(props: (typeof planetData)[0]) {
  const { name, size, distance, orbitalSpeed, textureUrl, specularMapUrl, nightTextureUrl, cloudTextureUrl, ringTextureUrl } = props;
  const planetRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  
  // Load all textures using a single hook call
  const textures = useTexture({
      map: textureUrl,
      ...(specularMapUrl && { specularMap: specularMapUrl }),
      ...(nightTextureUrl && { emissiveMap: nightTextureUrl }),
      ...(cloudTextureUrl && { alphaMap: cloudTextureUrl }),
      ...(ringTextureUrl && { ringMap: ringTextureUrl }),
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * orbitalSpeed * 0.1;
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(t) * distance;
      groupRef.current.position.z = Math.sin(t) * distance;
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0025; // Clouds rotate slightly faster
    }
  });

  return (
    <group ref={groupRef}>
      {/* The Planet itself */}
      <mesh ref={planetRef} scale={size} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={textures.map}
          metalness={0.1}
          roughness={0.7}
          {...(textures.specularMap && { specularMap: textures.specularMap })}
          {...(textures.emissiveMap && {
            emissiveMap: textures.emissiveMap,
            emissive: 0xffffff,
            emissiveIntensity: 1.0,
          })}
        />
      </mesh>
      {/* Clouds for Earth */}
      {cloudTextureUrl && (
         <mesh ref={cloudsRef} scale={size * 1.01} >
             <sphereGeometry args={[1, 64, 64]} />
             <meshStandardMaterial alphaMap={textures.alphaMap} transparent opacity={0.6} />
         </mesh>
      )}
      {/* Rings for Saturn */}
      {ringTextureUrl && (
        <mesh rotation-x={Math.PI / 2} scale={size}>
          <ringGeometry args={[1.2, 2.2, 128]} />
          <meshStandardMaterial map={textures.ringMap} side={THREE.DoubleSide} transparent opacity={0.9} />
        </mesh>
      )}
    </group>
  );
}

// --- Main Exported Component -----------------------------------------------
export default function SolarSystem() {
  const [sunFlareTrigger, setSunFlareTrigger] = useState<((f: any) => void) | null>(null);
  const [liveMode, setLiveMode] = useState(true);
  const [apiKey, setApiKey] = useState("tJcpNfbNE8HsTEACagiNvKDFXN52vrjMFpoZ9brX");

  // Fetch real solar flare data from NASA DONKI API
  useEffect(() => {
    if (!liveMode || !sunFlareTrigger || apiKey === "tJcpNfbNE8HsTEACagiNvKDFXN52vrjMFpoZ9brX") return;
    
    const fetchFlareData = async () => {
        try {
            const today = new Date();
            const startDate = new Date();
            startDate.setDate(today.getDate() - 7); // Look at the last 7 days
            const formattedDate = startDate.toISOString().split('T')[0];

            const response = await fetch(
                `https://api.nasa.gov/DONKI/FLR?startDate=${formattedDate}&api_key=${apiKey}`
            );
            const data = await response.json();

            if (data && data.length > 0) {
                const latestFlare = data[data.length - 1];
                const location = latestFlare.sourceLocation; // e.g., "S15W30"
                if (location) {
                    const latMatch = location.match(/S(\d+)|N(\d+)/);
                    const lonMatch = location.match(/W(\d+)|E(\d+)/);
                    if (latMatch && lonMatch) {
                        const lat = latMatch[1] ? -parseInt(latMatch[1]) : parseInt(latMatch[2]);
                        const lon = lonMatch[1] ? -parseInt(lonMatch[1]) : parseInt(lonMatch[2]);
                        console.log(`Triggering flare from NASA data: ${location} -> lat: ${lat}, lon: ${lon}`);
                        sunFlareTrigger({ lat, lon, intensity: 1.5 });
                    }
                }
            }
        } catch (error) {
            console.error("Failed to fetch NASA flare data:", error);
        }
    };
    
    // Fetch once on load, then set an interval
    fetchFlareData();
    const id = setInterval(fetchFlareData, 10 * 60 * 1000); // Check every 10 minutes
    return () => clearInterval(id);
  }, [liveMode, sunFlareTrigger, apiKey]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen pb-24 pt-20 px-4 md:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-6">
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Solar System Explorer</h1>
              <p className="text-sm text-muted-foreground">High-fidelity solar system with live data from NASA</p>
            </div>
             <div className="flex items-center gap-3">
               <label className="text-xs">NASA API Key</label>
               <input className="bg-white/10 rounded p-2 text-white text-sm w-48" value={apiKey} onChange={(e)=>setApiKey(e.target.value)} placeholder="Enter NASA API Key" />
               <button className="bg-blue-600 px-3 py-2 rounded" onClick={()=>setLiveMode(v=>!v)}>{liveMode? 'Pause Live':'Resume Live'}</button>
             </div>
          </header>

          <div className="md:col-span-2 w-full h-[720px] rounded-lg overflow-hidden border border-white/10">
            <Canvas camera={{ position: [0, AU * 1.5, AU * 4], fov: 50 }} gl={{ antialias: true }} shadows>
              <Suspense fallback={null}>
                {/* A high-res starfield background */}
                <Stars radius={300} depth={60} count={15000} factor={7} fade />
                
                <Sun onRegisterFlare={(fn) => setSunFlareTrigger(() => fn)} />
                
                {/* Dynamically create planets from our data array */}
                {planetData.map(planet => (
                    <Planet key={planet.name} {...planet} />
                ))}

                <OrbitControls enablePan={true} minDistance={AU} maxDistance={AU * 10} />
              </Suspense>
            </Canvas>
          </div>
          
           {/* You can add back your dashboard and other UI elements here */}
           <div className="grid md:grid-cols-3 gap-4">
               <div className="md:col-span-2">
                 <SpaceWeatherDashboard />
               </div>
               <div className="glass-panel p-4 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="font-bold">About This Visualization</h3>
                  <p className="text-sm mt-2 text-gray-300">
                    This scene uses high-resolution textures from NASA's Scientific Visualization Studio and JPL.
                    Lighting is calculated in real-time from a single point light within the Sun. When a valid NASA API key is provided,
                    the latest solar flare location is fetched from the DONKI database and visualized on the Sun's surface.
                  </p>
                </div>
           </div>
           
        </div>
      </div>
    </>
  );
}