import { Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-input rounded-full flex items-center p-1.5 shadow-lg">
      <div className="flex-1 flex items-center gap-2 px-4">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for somene..."
          className="w-full bg-transparent text-background placeholder:text-muted-foreground/60 outline-none text-sm"
        />
      </div>
      
      <div className="hidden sm:flex items-center gap-2 px-4 border-l border-border/30">
        <Calendar className="h-5 w-5 text-muted-foreground" />
        <span className="text-muted-foreground/60 text-sm">Date picker</span>
      </div>

      <Button className="rounded-full px-6">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
