/** Core */
import { Movie } from '@prisma/client';
import { SWRResponse } from 'swr';

/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useMovieList(): SWRResponse<Movie[]> {
  return useSWRRequest('/api/movies');
}
