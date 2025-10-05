import { Navigation } from "@/components/Navigation";
import { Bookmark } from "lucide-react";

export default function Bookmarks() {
  return (
    <div className="min-h-screen pb-32 pt-24 px-4 md:px-8">
      <Navigation />
      
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Bookmark className="h-10 w-10 text-accent" />
            Bookmarks
          </h1>
          <p className="text-muted-foreground">
            Your saved pages and favorite moments
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-12 text-center">
          <Bookmark className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">No bookmarks yet</h2>
          <p className="text-muted-foreground">
            Start reading stories and bookmark your favorite pages!
          </p>
        </div>
      </div>
    </div>
  );
}
