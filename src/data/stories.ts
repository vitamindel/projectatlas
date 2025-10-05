export interface Story {
  id: string;
  title: string;
  author: string;
  ageRange: string;
  category: string;
  duration: string;
  description: string;
  cover: string;
  pages: StoryPage[];
  tags: string[];
}

export interface StoryPage {
  pageNumber: number;
  text: string;
  illustration?: string;
}

export const stories: Story[] = [
  {
    id: "aurora-journey",
    title: "Aurora's Journey",
    author: "Dr. Emma Solar",
    ageRange: "6-10",
    category: "Solar Adventure",
    duration: "5 min",
    description: "Follow Aurora, a friendly solar flare, as she travels from the Sun to Earth, creating beautiful northern lights along the way.",
    cover: "/illustrations/aurora-cover.jpg",
    tags: ["Trending", "Solar Flares", "Northern Lights"],
    pages: [
      {
        pageNumber: 1,
        text: "Deep in the heart of the Sun, where temperatures soar to millions of degrees and it's hotter than a million ovens combined, lived a bright and bubbly solar flare named Aurora. She was different from the other flares - while they rushed about randomly, Aurora loved to dance among the swirling gases and dream of the vast universe beyond. Every day, she would watch the planets orbiting in the distance, wondering what it would be like to visit them. Her favorite was the beautiful blue planet called Earth, with its swirling white clouds and sparkling oceans. 'Someday,' she would whisper to herself, 'I'll travel all the way to Earth and see what makes it so special!'",
        illustration: "/illustrations/aurora-1.jpg"
      },
      {
        pageNumber: 2,
        text: "One extraordinary morning, Aurora felt a powerful surge of energy building up inside her. The magnetic field lines around her began to twist and turn, filling her with an incredible force. 'Today's the day!' she exclaimed with excitement. 'I'm going to see Earth!' With a brilliant flash that lit up the entire solar system, she burst from the Sun's surface at tremendous speed, racing through space faster than anything you can imagine. Behind her, she left a trail of glowing particles that sparkled like cosmic fairy dust. The other solar flares cheered as she began her great adventure, calling out 'Safe travels, Aurora! Make us proud!'",
        illustration: "/illustrations/aurora-2.jpg"
      },
      {
        pageNumber: 3,
        text: "As Aurora zoomed through the vast darkness of space at nearly the speed of light, she passed by many incredible sights. She waved at the rocky red planet Mars as she sped by, and carefully dodged around tumbling asteroids that looked like floating mountains. Mercury and Venus seemed so small and distant now. The journey that would take a spaceship months took Aurora only a few days. She could feel herself getting closer to Earth with every passing moment. 'Earth, here I come!' she sang cheerfully, her voice echoing through the vacuum of space in waves of energy and light. The stars twinkled around her like an audience watching her performance.",
        illustration: "/illustrations/aurora-3.jpg"
      },
      {
        pageNumber: 4,
        text: "When Aurora finally reached Earth, something amazing happened. She encountered the planet's invisible protective shield called the magnetosphere - a vast bubble of magnetic energy that surrounds Earth like a giant force field. 'Hello there!' said the magnetosphere in a kind, deep voice. 'Welcome to Earth! You must be a solar flare. I've been expecting travelers like you. Come, let me guide you to make something truly beautiful.' The magnetosphere was like a gentle giant, protecting Earth from harmful space radiation while welcoming friendly visitors like Aurora. It carefully directed her toward the North Pole, where the magic was about to happen.",
        illustration: "/illustrations/aurora-4.jpg"
      },
      {
        pageNumber: 5,
        text: "As Aurora entered Earth's upper atmosphere, following the magnetosphere's magnetic field lines toward the pole, something absolutely magical happened. She began to interact with oxygen and nitrogen molecules floating in the air, and suddenly, Aurora started to glow in the most brilliant colors! Shimmering greens, deep purples, radiant pinks, and even touches of red painted the night sky. Aurora had transformed into the Northern Lights! She danced and swirled across the sky, creating ribbons of color that rippled and flowed like curtains in the wind. Each movement created new patterns - sometimes arcs, sometimes crowns, sometimes waves that seemed to breathe with life. 'This is incredible!' Aurora thought. 'I've become part of Earth's beauty!'",
        illustration: "/illustrations/aurora-5.jpg"
      },
      {
        pageNumber: 6,
        text: "Down below in the snowy landscapes of Alaska, Canada, and Scandinavia, children and families bundled in warm coats looked up in absolute wonder. 'Look! It's the Northern Lights!' they cheered, pointing at the spectacular display. Parents lifted little ones onto their shoulders for a better view. Photographers set up their cameras to capture the moment. Indigenous peoples who had seen auroras many times before still stopped to admire the beauty, sharing ancient stories about the lights. Aurora could feel their joy and amazement, and it made her dance even more enthusiastically across the sky. She swooped and swirled, creating patterns that had never been seen before, putting on the show of a lifetime.",
        illustration: "/illustrations/aurora-6.jpg"
      },
      {
        pageNumber: 7,
        text: "'This is what I was meant to do,' Aurora thought happily as she continued her cosmic dance. 'I bring joy, beauty, and wonder to Earth! I connect the Sun and Earth in the most beautiful way possible.' As the night went on and eventually gave way to dawn, Aurora's glow began to fade with the rising sun. But she wasn't sad - she knew that her journey had brought happiness to thousands of people. And from that day on, whenever solar flares like Aurora visit Earth, people know to look up at the night sky and enjoy the spectacular light show. Scientists study them, artists paint them, and children dream about them. Aurora had shown that even something as powerful as space weather could create moments of pure magic and beauty.",
        illustration: "/illustrations/aurora-7.jpg"
      }
    ]
  },
  {
    id: "captain-luna",
    title: "Captain Luna's Space Adventure",
    author: "Commander Sarah Webb",
    ageRange: "8-12",
    category: "Space Station",
    duration: "6 min",
    description: "Join young astronaut Captain Luna aboard the International Space Station as she experiences a space weather event and learns to stay safe.",
    cover: "/illustrations/luna.jpg",
    tags: ["Adventure", "Astronauts", "ISS"],
    pages: [
      {
        pageNumber: 1,
        text: "Captain Luna floated through the International Space Station, her dark hair spreading around her head like a halo. She had been on the ISS for three months, and she loved every second of being in space.",
        illustration: "/illustrations/luna.jpg"
      },
      {
        pageNumber: 2,
        text: "One morning, mission control called with urgent news. 'Captain Luna, we've detected a strong solar storm heading your way. You'll need to move to the protected module.' Luna's heart raced with excitement and a little nervousness.",
        illustration: "/illustrations/luna.jpg"
      },
      {
        pageNumber: 3,
        text: "'Don't worry,' said Commander Chen, the station leader. 'Solar storms happen all the time. We have special shielded rooms that keep us safe from the radiation. It's like hiding under a cosmic umbrella!'",
        illustration: "/illustrations/luna.jpg"
      },
      {
        pageNumber: 4,
        text: "Luna helped gather important equipment and secure loose items. The crew moved into the shielded module, which had extra thick walls. Through the window, Luna could see Earth glowing blue below.",
        illustration: "/illustrations/luna.jpg"
      },
      {
        pageNumber: 5,
        text: "As the solar storm arrived, something incredible happened. The Earth's atmosphere lit up with auroras even more brilliant than usual. Luna watched in awe as green and purple lights danced over both poles.",
        illustration: "/illustrations/luna.jpg"
      },
      {
        pageNumber: 6,
        text: "'The storm is affecting our communications,' noted Commander Chen, checking the instruments. 'But that's okay. We planned for this.' Luna learned that space weather, while powerful, is predictable and manageable.",
        illustration: "/illustrations/luna.jpg"
      },
      {
        pageNumber: 7,
        text: "After a few hours, the storm passed. 'All clear!' announced mission control. Luna floated back to her work station, amazed by what she'd experienced. She couldn't wait to tell kids back on Earth about space weather and how astronauts stay safe among the stars.",
        illustration: "/illustrations/luna.jpg"
      }
    ]
  },
  {
    id: "farmer-joe",
    title: "Farmer Joe's GPS Mystery",
    author: "Professor Tom Fields",
    ageRange: "10-14",
    category: "Technology",
    duration: "5 min",
    description: "Discover how space weather affects everyday technology as Farmer Joe's GPS stops working during planting season.",
    cover: "/illustrations/farmer.jpg",
    tags: ["Mystery", "GPS", "Technology"],
    pages: [
      {
        pageNumber: 1,
        text: "Farmer Joe had been farming for thirty years, but this spring was different. He relied on GPS technology to plant his crops in perfect rows. The GPS-guided tractor could plant thousands of seeds with incredible precision.",
        illustration: "/illustrations/farmer.jpg"
      },
      {
        pageNumber: 2,
        text: "One Tuesday morning, Joe climbed into his tractor, ready for a productive day. But when he turned on the GPS system, something was wrong. The screen flickered and showed an error: 'Signal Lost.'",
        illustration: "/illustrations/farmer.jpg"
      },
      {
        pageNumber: 3,
        text: "'That's odd,' Joe muttered, checking all the connections. Everything looked fine. He called his neighbor, Sarah, who farmed the next field over. 'My GPS is down too!' she reported. 'What's going on?'",
        illustration: "/illustrations/farmer.jpg"
      },
      {
        pageNumber: 4,
        text: "Joe remembered his grandson mentioning something about space weather in school. He pulled out his phone and searched for 'GPS problems space weather.' His eyes widened as he read about solar storms affecting satellites.",
        illustration: "/illustrations/farmer.jpg"
      },
      {
        pageNumber: 5,
        text: "Sure enough, there was a news alert: 'Strong Geomagnetic Storm Affecting GPS Signals.' The article explained that charged particles from the Sun were disturbing Earth's ionosphere, the layer of atmosphere that GPS signals travel through.",
        illustration: "/illustrations/farmer.jpg"
      },
      {
        pageNumber: 6,
        text: "Joe learned that GPS satellites send signals through the ionosphere to receivers on Earth. During space weather events, the ionosphere gets scrambled, like trying to see through rippling water. The signals bend and scatter, making location calculations unreliable.",
        illustration: "/illustrations/farmer.jpg"
      },
      {
        pageNumber: 7,
        text: "The storm passed after a few hours, and Joe's GPS came back online. He shared what he learned with other farmers at the local co-op. 'We're all connected,' he said with wonder. 'Even here on Earth, we're affected by the weather in space!'",
        illustration: "/illustrations/farmer.jpg"
      }
    ]
  },
  {
    id: "dr-maya",
    title: "Dr. Maya's Weather Station",
    author: "Dr. Rachel Storm",
    ageRange: "12-16",
    category: "Science",
    duration: "7 min",
    description: "Follow space weather scientist Dr. Maya as she predicts and monitors space weather events using NASA's DONKI system.",
    cover: "/illustrations/maya.jpg",
    tags: ["Science", "DONKI", "Research"],
    pages: [
      {
        pageNumber: 1,
        text: "Dr. Maya Chen sat in the Space Weather Prediction Center, surrounded by screens displaying data from satellites, ground stations, and solar observatories. As a space weather scientist, her job was to forecast solar storms just like meteorologists forecast rain.",
        illustration: "/illustrations/maya.jpg"
      },
      {
        pageNumber: 2,
        text: "Her eyes locked onto an alert from NASA's DONKI system - the Database Of Notifications, Knowledge, Information. 'Interesting,' she murmured, examining the data. 'A coronal mass ejection, or CME, just erupted from the Sun.'",
        illustration: "/illustrations/maya.jpg"
      },
      {
        pageNumber: 3,
        text: "Maya pulled up satellite imagery showing a massive bubble of plasma exploding from the Sun's surface. She quickly calculated its speed and trajectory. 'This one's heading toward Earth,' she noted. 'It should arrive in about two to three days.'",
        illustration: "/illustrations/maya.jpg"
      },
      {
        pageNumber: 4,
        text: "She immediately began drafting alerts for satellite operators, power companies, and airlines. Each group needed to prepare in different ways. Satellites might need to go into safe mode. Power grids could experience surges. Polar flight routes might need rerouting.",
        illustration: "/illustrations/maya.jpg"
      },
      {
        pageNumber: 5,
        text: "Over the next two days, Maya tracked the CME's journey through space. She monitored data from spacecraft like ACE and DSCOVR, which orbit between Earth and the Sun, acting as early warning systems.",
        illustration: "/illustrations/maya.jpg"
      },
      {
        pageNumber: 6,
        text: "When the CME reached Earth, Maya watched the data stream in real-time. The magnetosphere compressed and then snapped back, releasing energy. Auroras lit up the night sky as far south as Kansas. Power grids held steady thanks to the advanced warning.",
        illustration: "/illustrations/maya.jpg"
      },
      {
        pageNumber: 7,
        text: "'This is why I love this job,' Maya thought, watching the beautiful auroras on the monitors. 'We can't stop space weather, but we can predict it, prepare for it, and protect the technology we depend on. And sometimes, it gives us a spectacular show.'",
        illustration: "/illustrations/maya.jpg"
      }
    ]
  },
  {
    id: "stella-satellite",
    title: "Stella's Satellite Mission",
    author: "Engineer Mark Orbit",
    ageRange: "8-12",
    category: "Technology",
    duration: "5 min",
    description: "Stella, a satellite engineer, must protect her satellite from a powerful solar storm using quick thinking and careful planning.",
    cover: "/illustrations/stella.jpg",
    tags: ["Engineering", "Satellites", "Problem-Solving"],
    pages: [
      {
        pageNumber: 1,
        text: "Stella Rodriguez was the lead engineer for WeatherSat-7, a satellite that helped predict storms on Earth. From her control room, she could communicate with the satellite orbiting 500 miles above the planet.",
        illustration: "/illustrations/stella.jpg"
      },
      {
        pageNumber: 2,
        text: "One afternoon, Stella received an urgent message from the Space Weather Center: 'Major solar flare detected. Radiation storm expected to reach satellite orbit in 30 minutes.' Her training kicked in immediately.",
        illustration: "/illustrations/stella.jpg"
      },
      {
        pageNumber: 3,
        text: "'We need to put WeatherSat-7 into safe mode,' Stella announced to her team. She quickly sent commands to the satellite: shut down non-essential systems, orient solar panels edge-on to reduce surface area, and activate extra radiation shielding.",
        illustration: "/illustrations/stella.jpg"
      },
      {
        pageNumber: 4,
        text: "As the radiation storm hit, Stella monitored every sensor. The satellite's computers were protected in a special vault, like a tiny underground bunker in space. The radiation levels spiked on her screens, climbing higher and higher.",
        illustration: "/illustrations/stella.jpg"
      },
      {
        pageNumber: 5,
        text: "'It's working!' exclaimed her colleague, James. The satellite's critical systems remained safe behind their shielding. Stella explained to the junior engineers watching: 'Satellites are built to withstand space weather, but we help them by reducing their vulnerability during the worst storms.'",
        illustration: "/illustrations/stella.jpg"
      },
      {
        pageNumber: 6,
        text: "After two hours, the radiation storm subsided. Stella carefully commanded WeatherSat-7 to resume normal operations. Each system came back online perfectly. 'All green across the board,' she reported with relief.",
        illustration: "/illustrations/stella.jpg"
      },
      {
        pageNumber: 7,
        text: "That evening, Stella looked at Earth from the satellite's camera. The planet glowed with city lights and swirling clouds. 'We protect the satellites that protect us,' she thought proudly. 'Every day, space weather reminds us that Earth is part of a much bigger neighborhood.'",
        illustration: "/illustrations/stella.jpg"
      }
    ]
  },
  {
    id: "radio-blackout",
    title: "The Great Radio Blackout",
    author: "Alex Waveman",
    ageRange: "10-14",
    category: "Communication",
    duration: "6 min",
    description: "Amateur radio operator discovers how solar flares create radio blackouts and learns about high-frequency communication.",
    cover: "/illustrations/radio.jpg",
    tags: ["Radio", "Solar Flares", "Communication"],
    pages: [
      {
        pageNumber: 1,
        text: "Marcus sat in his garage, surrounded by radio equipment and antennas. At fifteen, he was one of the youngest licensed ham radio operators in his city. He loved talking to people around the world using nothing but radio waves.",
        illustration: "/illustrations/radio.jpg"
      },
      {
        pageNumber: 2,
        text: "On Saturday morning, Marcus was chatting with a radio operator in Australia. Suddenly, the voice faded to static. 'KA9XYZ, this is VK4ABC, are you still there?' Nothing. Marcus checked his equipment - everything was working fine.",
        illustration: "/illustrations/radio.jpg"
      },
      {
        pageNumber: 3,
        text: "He tried calling other stations. The local repeater worked, but all long-distance high-frequency contacts were impossible. It was like a blanket of silence had fallen over the airwaves. Marcus remembered learning about this in his radio license class.",
        illustration: "/illustrations/radio.jpg"
      },
      {
        pageNumber: 4,
        text: "He pulled up a space weather website. His suspicion was confirmed: 'X-class solar flare in progress. Radio blackout in effect.' Marcus read about how powerful X-rays from solar flares hit Earth's ionosphere.",
        illustration: "/illustrations/radio.jpg"
      },
      {
        pageNumber: 5,
        text: "The ionosphere is like a mirror in the sky that bounces radio signals around the Earth. But during a solar flare, it gets over-energized and absorbs radio waves instead of reflecting them. It's like the mirror turning into a sponge.",
        illustration: "/illustrations/radio.jpg"
      },
      {
        pageNumber: 6,
        text: "Marcus started a blog post explaining what was happening. He included diagrams showing how radio waves normally bounce off the ionosphere but get absorbed during flares. His post helped other confused radio operators understand the blackout.",
        illustration: "/illustrations/radio.jpg"
      },
      {
        pageNumber: 7,
        text: "An hour later, the flare subsided and the ionosphere recovered. Marcus heard his Australian friend calling: 'VK4ABC back on the air! Did you experience the blackout too?' Marcus smiled. Space weather had turned his hobby into a science lesson he'd never forget.",
        illustration: "/illustrations/radio.jpg"
      }
    ]
  },
  {
    id: "solar-storm-chasers",
    title: "Solar Storm Chasers",
    author: "Dr. Nina Spaceweather",
    ageRange: "12-16",
    category: "Adventure",
    duration: "7 min",
    description: "Join a team of scientists as they chase the perfect geomagnetic storm to study auroras and magnetic field disruptions.",
    cover: "/illustrations/chasers-cover.jpg",
    tags: ["Research", "Auroras", "Field Work"],
    pages: [
      {
        pageNumber: 1,
        text: "The research van raced through the Alaskan wilderness, headlights cutting through the darkness. Inside, Dr. Jamal Hassan checked his instruments while his teammate, Dr. Sophie Nordlicht, monitored space weather alerts. They were storm chasers, but not the kind you might think.",
        illustration: "/illustrations/chasers-cover.jpg"
      },
      {
        pageNumber: 2,
        text: "'The Kp index just hit 7!' Sophie exclaimed. 'This is going to be a strong one.' They were chasing a geomagnetic storm - when solar wind slams into Earth's magnetic field, creating spectacular auroras and scientific opportunities.",
        illustration: "/illustrations/chasers-cover.jpg"
      },
      {
        pageNumber: 3,
        text: "They set up their equipment in a clearing away from city lights: magnetometers to measure Earth's magnetic field, all-sky cameras to photograph auroras, and radio receivers to detect electromagnetic disturbances. Everything had to be ready before the storm's peak.",
        illustration: "/illustrations/chasers-cover.jpg"
      },
      {
        pageNumber: 4,
        text: "As darkness deepened, the northern sky began to glow. First, a faint green arc appeared. Then, suddenly, the entire sky erupted in dancing curtains of light. Green, purple, and red auroras swirled overhead like cosmic waterfalls.",
        illustration: "/illustrations/chasers-cover.jpg"
      },
      {
        pageNumber: 5,
        text: "Jamal's magnetometer went wild, recording rapid fluctuations in Earth's magnetic field. 'Look at these readings!' he called out. 'The magnetic field is oscillating like a plucked guitar string!' Sophie's cameras captured the auroras' intricate structures.",
        illustration: "/illustrations/chasers-cover.jpg"
      },
      {
        pageNumber: 6,
        text: "They weren't just enjoying a light show - they were gathering data to understand how space weather affects Earth. Each measurement helped scientists predict future storms and protect satellites, power grids, and communication systems.",
        illustration: "/illustrations/chasers-cover.jpg"
      },
      {
        pageNumber: 7,
        text: "As dawn approached and the auroras faded, the team packed up their equipment. 'Another successful chase,' Sophie said, reviewing the night's data. Jamal nodded, already checking forecasts for the next storm. For solar storm chasers, the hunt never ends - and each storm teaches us something new.",
        illustration: "/illustrations/chasers-cover.jpg"
      }
    ]
  },
  {
    id: "tommy-telescope",
    title: "Tommy's Telescope Tale",
    author: "Astrid Starlight",
    ageRange: "6-10",
    category: "Discovery",
    duration: "5 min",
    description: "Young astronomer Tommy learns about sunspots and solar cycles while observing the Sun safely with his grandfather.",
    cover: "/illustrations/tommy-cover.jpg",
    tags: ["Astronomy", "Sunspots", "Family"],
    pages: [
      {
        pageNumber: 1,
        text: "Tommy bounced with excitement as Grandpa Joe set up the special solar telescope in the backyard. Unlike regular telescopes that look at stars at night, this one was designed to safely observe the Sun during the day.",
        illustration: "/illustrations/tommy-cover.jpg"
      },
      {
        pageNumber: 2,
        text: "'Remember, Tommy,' Grandpa warned, 'never look at the Sun without proper protection. This telescope has special filters that make it safe.' Tommy nodded seriously. He knew the Sun was so bright it could hurt his eyes.",
        illustration: "/illustrations/tommy-cover.jpg"
      },
      {
        pageNumber: 3,
        text: "Through the telescope, the Sun looked like a glowing orange disk. But it wasn't smooth - dark spots dotted its surface. 'Those are sunspots,' Grandpa explained. 'They're cooler areas where the Sun's magnetic field is extra strong.'",
        illustration: "/illustrations/tommy-cover.jpg"
      },
      {
        pageNumber: 4,
        text: "Tommy sketched what he saw in his astronomy notebook: a big sunspot group near the Sun's middle and smaller spots scattered around. 'Some sunspots are bigger than Earth!' Grandpa said. Tommy's eyes widened - Earth seemed so tiny compared to the Sun.",
        illustration: "/illustrations/tommy-cover.jpg"
      },
      {
        pageNumber: 5,
        text: "Over the next few weeks, Tommy and Grandpa observed the Sun every clear day. They watched the sunspots move across the Sun's face. 'The Sun rotates, just like Earth,' Grandpa taught. 'It takes about 27 days for one complete spin.'",
        illustration: "/illustrations/tommy-cover.jpg"
      },
      {
        pageNumber: 6,
        text: "Grandpa showed Tommy pictures from previous years. Some years had lots of sunspots, others had very few. 'The Sun has an 11-year cycle,' he explained. 'Sometimes it's very active with many sunspots and solar flares. Other times it's quiet.'",
        illustration: "/illustrations/tommy-cover.jpg"
      },
      {
        pageNumber: 7,
        text: "Tommy learned that space weather comes from the Sun's activity. More sunspots usually means more solar flares and more auroras. That night, Tommy dreamed of becoming a solar scientist. He wanted to understand the Sun and protect Earth from space weather, just like the scientists he'd read about.",
        illustration: "/illustrations/tommy-cover.jpg"
      }
    ]
  }
];
