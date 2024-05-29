/** Core */
import { Movie } from '@prisma/client';
import { SWRResponse } from 'swr';

/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useMovie(id?: string): SWRResponse<Movie> {
  return useSWRRequest(id ? `/api/movies/${id}` : null);
}
