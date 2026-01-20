import { Music, Mic2, Trophy } from "lucide-react";

const categories = [
  { id: "concerts", label: "Concerts", icon: Music },
  { id: "comedy", label: "Comedy", icon: Mic2 },
  { id: "sports", label: "Sports & Turf", icon: Trophy },
];

const CategoryTabs = () => {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-16">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Icon className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base font-medium group-hover:text-foreground">
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
