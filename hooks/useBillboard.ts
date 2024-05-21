/** Core */
import useSWR from 'swr';

/** Libs */
import { fetcher } from '@/lib/fetcher';

export function useBillboard() {
  const { data, error, isLoading } = useSWR('/api/random', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
}
