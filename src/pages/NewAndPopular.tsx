import React from 'react';
import MovieRow from '../components/MovieRow';
import { movieCategories } from '../data/movieCategories';

export default function NewAndPopular() {
  // Use specific categories for new and popular content
  const newAndPopularCategories = movieCategories.slice(0, 3);

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="px-4 md:px-16">
        <h1 className="text-white text-4xl font-bold mb-8">New & Popular</h1>
        {newAndPopularCategories.map((section, index) => (
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