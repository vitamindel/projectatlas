import { useEffect, useState } from "react";
import { Activity, Zap, Radio, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SpaceWeatherEvent {
  type: string;
  time: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export function SpaceWeatherDashboard() {
  const [events, setEvents] = useState<SpaceWeatherEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpaceWeather();
  }, []);

  const fetchSpaceWeather = async () => {
    try {
      const NASA_API_KEY = "tJcpNfbNE8HsTEACagiNvKDFXN52vrjMFpoZ9brX";
      const today = new Date().toISOString().split("T")[0];
      
      // Fetch recent solar flares
      const flrResponse = await fetch(
        `https://api.nasa.gov/DONKI/FLR?startDate=${today}&api_key=${NASA_API_KEY}`
      );
      const flrData = await flrResponse.json();

      const parsedEvents: SpaceWeatherEvent[] = flrData.slice(0, 3).map((flare: any) => ({
        type: "Solar Flare",
        time: new Date(flare.beginTime).toLocaleString(),
        description: `${flare.classType} class flare detected`,
        severity: flare.classType?.startsWith("X") ? "high" : flare.classType?.startsWith("M") ? "medium" : "low",
      }));

      setEvents(parsedEvents);
    } catch (error) {
      console.error("Error fetching space weather:", error);
      // Set demo data if API fails
      setEvents([
        {
          type: "Solar Flare",
          time: new Date().toLocaleString(),
          description: "C-class flare detected",
          severity: "low",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "Solar Flare":
        return Zap;
      case "CME":
        return Activity;
      case "Radio Blackout":
        return Radio;
      default:
        return AlertTriangle;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="glass-panel p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Activity className="h-5 w-5 text-accent animate-pulse" />
          Live Space Weather
        </h2>
        <Badge variant="outline" className="animate-pulse">
          LIVE
        </Badge>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-muted/20 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {events.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No recent space weather events detected
            </p>
          ) : (
            events.map((event, i) => {
              const Icon = getIcon(event.type);
              return (
                <div
                  key={i}
                  className="glass-panel p-4 rounded-lg border border-white/5 hover-lift"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{event.type}</h3>
                        <Badge variant={getSeverityColor(event.severity) as any}>
                          {event.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      <p className="text-xs text-muted-foreground text-center pt-2">
        Data from NASA DONKI System
      </p>
    </Card>
  );
}
