/** Interfaces */
import { Movie } from '@prisma/client';

export interface IDataMovieOrUndefined {
  data: Movie | undefined;
}

export type IMovieOrUndefined<T extends keyof Movie> = Partial<Pick<Movie, T>>;
