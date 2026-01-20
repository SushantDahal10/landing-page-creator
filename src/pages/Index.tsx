import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import PopularEvents from "@/components/PopularEvents";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          {/* Carousel */}
          <section className="mb-8">
            <HeroCarousel />
          </section>

          {/* Tagline */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Discover & Book Unforgettable Experiences in Nepal.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mt-2">
              Concerts, Stand-up, Sports, and More.
            </p>
          </div>

          {/* Search Bar */}
          <section className="mb-12">
            <SearchBar />
          </section>

          {/* Divider */}
          <div className="border-t border-border mb-8" />

          {/* Category Tabs */}
          <section className="mb-8">
            <CategoryTabs />
          </section>

          {/* Popular Events */}
          <PopularEvents />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
