export interface Movie {
  id: number;
  title: string;
  image: string;
  genre?: string;
  rating?: number;
  year?: number;
}

export interface User {
  email: string;
  name?: string;
}