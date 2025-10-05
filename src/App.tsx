import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import StoryReader from "./pages/StoryReader";
import Audio from "./pages/Audio";
import Bookmarks from "./pages/Bookmarks";
import Favorites from "./pages/Favorites";
import SpaceWeather from "./pages/SpaceWeather";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/story/:storyId" element={<StoryReader />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/space-weather" element={<SpaceWeather />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
