import { Navigation } from "@/components/Navigation";
import { StoryCard } from "@/components/StoryCard";
import { SpaceWeatherDashboard } from "@/components/SpaceWeatherDashboard";
import { stories } from "@/data/stories";
import { Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Library() {
  // Simulate some reading progress for demo
  const continueReading = stories.slice(0, 3).map((story, i) => ({
    ...story,
    progress: [45, 78, 23][i],
  }));

  const popularStories = stories.slice(0, 4);
  const allStories = stories;

  return (
    <div className="min-h-screen pb-32 pt-24 px-4 md:px-8">
      <Navigation />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative glass-panel rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 cosmic-gradient opacity-30" />
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Welcome to Project Atlas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold hero-title">
              Make your E-Bookshelf!
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore fascinating space weather stories while learning from real NASA data.
              Interactive adventures for curious minds of all ages.
            </p>

            <Tabs defaultValue="books" className="pt-4">
              <TabsList className="glass-pill">
                <TabsTrigger value="books">Books</TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* All Stories */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">All Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
