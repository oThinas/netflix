/** Core */
import useSWR from 'swr';

/** Libs */
import { fetcher } from '@/lib/fetcher';

export function useSWRRequest(url: string | null) {
  const { data, error, isLoading, mutate, isValidating } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading, mutate, isValidating };
}
