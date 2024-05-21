/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useFavorites() {
  return useSWRRequest('/api/favorites');
}
