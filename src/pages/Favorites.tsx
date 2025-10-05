import { Navigation } from "@/components/Navigation";
import { Heart } from "lucide-react";

export default function Favorites() {
  return (
    <div className="min-h-screen pb-32 pt-24 px-4 md:px-8">
      <Navigation />
      
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Heart className="h-10 w-10 text-accent" />
            Favorites
          </h1>
          <p className="text-muted-foreground">
            Stories you've marked as favorites
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-12 text-center">
          <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-muted-foreground">
            Mark stories as favorites to find them here!
          </p>
        </div>
      </div>
    </div>
  );
}
