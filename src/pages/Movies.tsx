import React from 'react';
import MovieRow from '../components/MovieRow';
import { movieCategories } from '../data/movieCategories';

export default function Movies() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="px-4 md:px-16">
        <h1 className="text-white text-4xl font-bold mb-8">Movies</h1>
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