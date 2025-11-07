import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'; 
import EventCard from './EventCard';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

const ArrowButton = ({ children, onClick, disabled, className }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-accent text-bg p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition ${className}`}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {children}
  </button>
);

// --- 輪播主體 ---
export default function EventCarousel({ slides, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex"> 
          {slides.map((event, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 px-2">
                <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>

      <ArrowButton onClick={scrollPrev} className="left-4">
        <ChevronLeft size={24} />
      </ArrowButton>

      <ArrowButton onClick={scrollNext} className="right-4">
        <ChevronRight size={24} />
      </ArrowButton>

    </div>
  );
}