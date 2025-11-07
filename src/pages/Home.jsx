import Header from "../component/Header";
import Hero from "../component/Hero";
import EventSection from "../component/EventSection";
import NewsSection from "../component/NewsSection";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <Hero />
      <EventSection />
      <NewsSection />
      <Footer />
    </div>
  );
}

