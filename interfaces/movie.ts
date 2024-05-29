/** Interfaces */
import { Movie } from '@prisma/client';

export interface IDataMovie {
  data: Movie;
}

export type IDataMovieOrUndefined = Partial<IDataMovie>;

export type IMovieOrUndefined<T extends keyof Movie> = Partial<Pick<Movie, T>>;
