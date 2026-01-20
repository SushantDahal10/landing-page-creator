interface EventCardProps {
  image: string;
  title: string;
  date: string;
}

const EventCard = ({ image, title, date }: EventCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden mb-3 aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-foreground font-medium text-center">
        {title} - {date}
      </h3>
    </div>
  );
};

export default EventCard;
