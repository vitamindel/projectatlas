import { Navigation } from "@/components/Navigation";
import { StoryCard } from "@/components/StoryCard";
import { stories } from "@/data/stories";
import { Headphones } from "lucide-react";

export default function Audio() {
  return (
    <div className="min-h-screen pb-32 pt-24 px-4 md:px-8">
      <Navigation />
      
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Headphones className="h-10 w-10 text-accent" />
            Audio Stories
          </h1>
          <p className="text-muted-foreground">
            Listen to all stories with natural voice narration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
