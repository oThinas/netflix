/** Core */
import useSWR from 'swr';

/** Lib */
import { fetcher } from '@/lib/fetcher';

export function useCurrentUser() {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
