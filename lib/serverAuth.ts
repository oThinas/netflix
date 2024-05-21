/** Core */
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

/** Lib */
import prismadb from '@/lib/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function serverAuth(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions);
  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUser = await prismadb.user.findUnique({ where: { email: session.user.email } });
  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
}
