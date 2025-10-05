import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { stories } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  BookmarkPlus,
  Share2,
  Settings,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function StoryReader() {
  const { storyId } = useParams();
  const story = stories.find((s) => s.id === storyId);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Stop any ongoing speech when component unmounts or page changes
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [currentPage]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Story not found</h1>
          <Link to="/">
            <Button>Back to Library</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentPageData = story.pages[currentPage];
  const progress = ((currentPage + 1) / story.pages.length) * 100;

  const handlePlayPause = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(currentPageData.text);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const nextPage = () => {
    if (currentPage < story.pages.length - 1) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBookmark = () => {
    toast({
      title: "Bookmark added",
      description: `Page ${currentPage + 1} bookmarked in ${story.title}`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Share functionality coming soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="glass-panel border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="text-center flex-1">
            <h1 className="font-bold text-lg line-clamp-1">{story.title}</h1>
            <p className="text-xs text-muted-foreground">by {story.author}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={handleBookmark}>
            <BookmarkPlus className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Story Content */}
      <main className="flex-1 overflow-y-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl overflow-hidden">
            {/* Story Image */}
            {currentPageData.illustration && (
              <div className="relative aspect-video bg-muted">
                <img
                  src={currentPageData.illustration}
                  alt={`${story.title} - Page ${currentPage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Story Text */}
            <div className="p-8 md:p-12 space-y-6">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Chapter {currentPage + 1}</span>
                <span>
                  {currentPage + 1} / {story.pages.length}
                </span>
              </div>

              <div className="text-lg md:text-xl leading-relaxed space-y-4">
                <p>{currentPageData.text}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              size="lg"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="glass-pill"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={nextPage}
              disabled={currentPage === story.pages.length - 1}
              className="glass-pill"
            >
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      {/* Audio Controls */}
      <footer className="glass-panel border-t border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress value={progress} className="h-1" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {Math.floor((currentPage / story.pages.length) * parseInt(story.duration))} min
              </span>
              <span>{story.duration}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" onClick={prevPage} disabled={currentPage === 0}>
              <SkipBack className="h-5 w-5" />
            </Button>

            <Button
              size="icon"
              className="h-14 w-14 rounded-full cosmic-gradient hover-glow"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 fill-current" />
              ) : (
                <Play className="h-6 w-6 fill-current" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextPage}
              disabled={currentPage === story.pages.length - 1}
            >
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>

          {/* Additional Controls */}
          <div className="flex items-center justify-around pt-2">
            <Button variant="ghost" size="sm" className="flex flex-col gap-1">
              <Volume2 className="h-4 w-4" />
              <span className="text-xs">Audio</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col gap-1" onClick={handleBookmark}>
              <BookmarkPlus className="h-4 w-4" />
              <span className="text-xs">Bookmark</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col gap-1" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
              <span className="text-xs">Share</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col gap-1">
              <Settings className="h-4 w-4" />
              <span className="text-xs">Settings</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
