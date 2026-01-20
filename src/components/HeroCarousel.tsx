import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import concertImg from "@/assets/concert.jpg";
import comedyImg from "@/assets/comedy.jpg";
import sportsImg from "@/assets/sports.jpg";

const slides = [
  { id: 1, image: concertImg, alt: "Concert" },
  { id: 2, image: comedyImg, alt: "Comedy Show" },
  { id: 3, image: sportsImg, alt: "Sports" },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="flex gap-4 items-center justify-center">
        {/* Previous Slide Preview */}
        <div className="hidden lg:block w-64 h-40 rounded-xl overflow-hidden opacity-50 transform scale-90">
          <img
            src={slides[(currentSlide - 1 + slides.length) % slides.length].image}
            alt={slides[(currentSlide - 1 + slides.length) % slides.length].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Slide */}
        <div className="relative w-full max-w-xl h-48 md:h-64 rounded-xl overflow-hidden shadow-2xl">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Next Slide Preview */}
        <div className="hidden lg:block w-64 h-40 rounded-xl overflow-hidden opacity-50 transform scale-90">
          <img
            src={slides[(currentSlide + 1) % slides.length].image}
            alt={slides[(currentSlide + 1) % slides.length].alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
