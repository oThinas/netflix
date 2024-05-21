/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useMovieList() {
  return useSWRRequest('/api/movies');
}
