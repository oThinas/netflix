/** Core */
import { Movie } from '@prisma/client';
import { SWRResponse } from 'swr';

/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useFavorites(): SWRResponse<Movie[]> {
  return useSWRRequest('/api/favorites');
}
