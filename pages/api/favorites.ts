/** Core */
import { NextApiRequest, NextApiResponse } from 'next';

/** Libs */
import prismadb from '@/lib/prismadb';
import { serverAuth } from '@/lib/serverAuth';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'GET') {
    return response.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(request, response);
    const favoriteMovies = await prismadb.movie.findMany({ where: { id: { in: currentUser?.favoriteIds } } });

    return response.status(200).json(favoriteMovies);
  } catch (error) {
    console.error(error);
    return response.status(400).end();
  }
}
