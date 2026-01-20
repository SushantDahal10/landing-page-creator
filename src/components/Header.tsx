import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">
            Nepali<span className="text-primary">Shows</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
            Events
          </a>
          <a href="#venues" className="text-muted-foreground hover:text-foreground transition-colors">
            Venues
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <Button variant="default" size="sm" className="rounded-full px-6">
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
