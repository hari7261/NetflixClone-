import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Movie {
  id: number;
  image: string;
  title: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  const slideLeft = () => {
    const slider = document.getElementById('slider-' + title);
    if (slider) slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider-' + title);
    if (slider) slider.scrollLeft += 500;
  };

  return (
    <div className="px-4 md:px-16 mt-4">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="relative group">
        <ChevronLeft
          onClick={slideLeft}
          className="absolute left-0 top-0 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-125 text-white"
        />
        <div
          id={'slider-' + title}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          <div className="flex gap-2">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer hover:scale-105 transition"
              >
                <img
                  className="w-full h-auto rounded"
                  src={movie.image}
                  alt={movie.title}
                />
              </div>
            ))}
          </div>
        </div>
        <ChevronRight
          onClick={slideRight}
          className="absolute right-0 top-0 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-125 text-white"
        />
      </div>
    </div>
  );
}