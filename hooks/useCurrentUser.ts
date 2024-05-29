/** Core */
import { User } from '@prisma/client';
import { SWRResponse } from 'swr';

/** Hooks */
import { useSWRRequest } from './useSWRRequest';

export function useCurrentUser(): SWRResponse<User> {
  return useSWRRequest('/api/current');
}
