import EventCard from "./EventCard";
import concertImg from "@/assets/concert.jpg";
import comedyImg from "@/assets/comedy.jpg";
import sportsImg from "@/assets/sports.jpg";

const events = [
  {
    id: 1,
    image: concertImg,
    title: "KTM Rock Fest",
    date: "Oct 26",
  },
  {
    id: 2,
    image: comedyImg,
    title: "Patan Comedy Night",
    date: "Nov 2",
  },
  {
    id: 3,
    image: sportsImg,
    title: "Lalitpur Futsal League",
    date: "Nov 10",
  },
];

const PopularEvents = () => {
  return (
    <section className="py-12">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-8">
        Popular Upcoming Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularEvents;
