/** Core */
import { Movie } from '@prisma/client';
import { SWRResponse } from 'swr';

/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useBillboard(): SWRResponse<Movie> {
  return useSWRRequest('/api/random');
}
