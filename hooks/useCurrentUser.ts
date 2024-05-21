/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useCurrentUser() {
  return useSWRRequest('/api/current');
}
