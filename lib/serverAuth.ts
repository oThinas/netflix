/** Core */
import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

/** Lib */
import prismadb from '@/lib/prismadb';

export async function serverAuth(request: NextApiRequest) {
  const session = await getSession({ req: request });
  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUser = await prismadb.user.findUnique({ where: { email: session.user.email } });
  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
}
