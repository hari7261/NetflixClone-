import { Movie } from '../types';

export const trendingMovies: Movie[] = [
  { id: 1, title: "Inception", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1" },
  { id: 2, title: "The Matrix", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728" },
  { id: 3, title: "Interstellar", image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31" }
];

export const popularMovies: Movie[] = [
  { id: 4, title: "Stranger Things", image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b" },
  { id: 5, title: "Dark", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0" },
  { id: 6, title: "Breaking Bad", image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b" }
];

export const newReleases: Movie[] = [
  { id: 7, title: "The Crown", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf" },
  { id: 8, title: "Bridgerton", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1" },
  { id: 9, title: "Money Heist", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728" }
];

export const movieCategories = [
  { title: "Trending Now", movies: trendingMovies },
  { title: "Popular Movies", movies: popularMovies },
  { title: "New Releases", movies: newReleases },
  { title: "Action Movies", movies: trendingMovies },
  { title: "Comedy Movies", movies: popularMovies },
  { title: "Drama Movies", movies: newReleases },
  { title: "Horror Movies", movies: trendingMovies },
  { title: "Sci-Fi Movies", movies: popularMovies },
  { title: "Documentary", movies: newReleases },
  { title: "International Movies", movies: trendingMovies }
];