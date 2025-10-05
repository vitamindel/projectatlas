import { Play, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Story } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface StoryCardProps {
  story: Story;
  progress?: number;
}

export function StoryCard({ story, progress = 0 }: StoryCardProps) {
  return (
    <Link to={`/story/${story.id}`}>
      <div className="group relative glass-panel rounded-2xl overflow-hidden hover-lift hover-glow cursor-pointer">
        {/* Cover Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={story.cover}
            alt={story.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" className="h-16 w-16 rounded-full cosmic-gradient">
              <Play className="h-8 w-8 fill-current" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {story.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {story.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {story.description}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>{story.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{story.duration}</span>
            </div>
          </div>

          {/* Progress Bar */}
          {progress > 0 && (
            <div className="pt-2">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full aurora-gradient transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{progress}% complete</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
