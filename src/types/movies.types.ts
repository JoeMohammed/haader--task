export type TMovies = {
  id: string;
  name: string;
  movies: {
    id: number;
    name: string;
    description: string;
    rate: string;
  }[];
}[];

export interface IMovie {
  movies: {
    id: number;
    name: string;
    description: string;
    rate: string;
  };
}
