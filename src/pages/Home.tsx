import React from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { movieCategories } from '../data/movieCategories';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Hero />
      <div className="relative z-20 -mt-32">
        {movieCategories.map((section, index) => (
          <MovieRow
            key={index}
            title={section.title}
            movies={section.movies}
          />
        ))}
      </div>
    </div>
  );
}