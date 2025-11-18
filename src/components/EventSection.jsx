import { Button } from "@/components/ui/button";
import EventCarousel from "./EventCarousel"; 
import { Link } from 'react-router-dom';

function EventSection() {
  const events = [
    {
      image: "https://seatgeekimages.com/performers-landscape/paul-mccartney-08c6b1/1408/500x375.jpg?auto=webp&width=640&quality=75",
      title: "Jacob Collier",
      date: "Nov 2",
      price: "$92",
    },
    {
      image: "https://seatgeekimages.com/performers-landscape/paul-mccartney-08c6b1/1408/500x375.jpg?auto=webp&width=640&quality=75",
      title: "Penn State at #1 Ohio State",
      date: "Nov 1",
      price: "$79",
    },
    {
      image: "https://seatgeekimages.com/performers-landscape/paul-mccartney-08c6b1/1408/500x375.jpg?auto=webp&width=640&quality=75",
      title: "Tate McRae with Alessi Rose",
      date: "Oct 31",
      price: "$54",
    },
    {
      image: "https://seatgeekimages.com/performers-landscape/paul-mccartney-08c6b1/1408/500x375.jpg?auto=webp&width=640&quality=75",
      title: "49ers at Giants",
      date: "Nov 2",
      price: "$185",
    },
    {
      image: "https://seatgeekimages.com/performers-landscape/paul-mccartney-08c6b1/1408/500x375.jpg?auto=webp&width=640&quality=75",
      title: "Jacob Collier",
      date: "Nov 2",
      price: "$92",
    },
    {
      image: "https://seatgeekimages.com/performers-landscape/paul-mccartney-08c6b1/1408/500x375.jpg?auto=webp&width=640&quality=75",
      title: "Penn State at #1 Ohio State",
      date: "Nov 1",
      price: "$79",
    },
    {
      image: "https://seatgeekimages.com/performers-landscape/paul-mccartney-08c6b1/1408/500x375.jpg?auto=webp&width=640&quality=75",
      title: "Tate McRae with Alessi Rose",
      date: "Oct 31",
      price: "$54",
    },
    {
      image: "https://seatgeekimages.com/performers-landscape/paul-mccartney-08c6b1/1408/500x375.jpg?auto=webp&width=640&quality=75",
      title: "49ers at Giants",
      date: "Nov 2",
      price: "$185",
    },
  ];

  const carouselOptions = {
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    duration: 15,
  };

  return (
    <section className="py-10 bg-text text-bg text-center">
      <h2 className="text-2xl font-semibold mb-6">熱門活動</h2>
     
      <div className="max-w-7xl mx-auto px-4">
        <EventCarousel 
          slides={events} 
          options={carouselOptions} 
        />
      </div>
      
      <Button variant="outline" className="mt-6">
        <Link to="/shows">顯示更多</Link>
      </Button>
    </section>
  );
}

export default EventSection;