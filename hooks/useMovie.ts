/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useMovie(id: string) {
  return useSWRRequest(`/api/movies/${id}`);
}
