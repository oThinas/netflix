/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useBillboard() {
  return useSWRRequest('/api/random');
}
