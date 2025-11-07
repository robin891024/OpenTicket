import { useState } from "react";
import { Search } from "lucide-react";

function Hero() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`搜尋活動: ${query}`);
  };

  return (
    <section className="bg-accent text-center text-accent py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-bg mb-2">Let there be live</h2>
      <p className="text-bg">Your next best-night-ever is waiting</p>
      <form
        onSubmit={handleSearch}
        className="relative w-11/12 sm:w-3/4 md:w-1/2 flex items-center bg-bg rounded-full overflow-hidden"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-3 text-text outline-none"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary text-bg px-4 py-3 flex items-center justify-center"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>
    </section>
  );
}

export default Hero;