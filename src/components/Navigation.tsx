import { Search, Library, Headphones, Bookmark, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { icon: Library, label: "Library", path: "/" },
    { icon: Headphones, label: "Audio", path: "/audio" },
    { icon: Search, label: "Space Weather", path: "/space-weather" },
    { icon: Bookmark, label: "Bookmarks", path: "/bookmarks" },
    { icon: Heart, label: "Favorites", path: "/favorites" },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-pill mx-4 mt-4 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full cosmic-gradient" />
            <span className="font-bold text-lg hidden md:block">Project Atlas</span>
          </Link>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search stories..."
              className="pl-10 glass-panel border-white/10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-panel mx-4 mb-4 px-6 py-4">
        <div className="flex items-center justify-around max-w-4xl mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 transition-all ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "drop-shadow-[0_0_8px_hsl(var(--primary))]" : ""}`} />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
