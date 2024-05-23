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
    await serverAuth(request, response);

    const { movieId } = request.query;
    if (typeof movieId !== 'string' || !movieId) {
      throw new Error('Invalid ID');
    }

    const movie = await prismadb.movie.findUnique({ where: { id: movieId } });
    if (!movie) {
      throw new Error('Invalid ID');
    }

    return response.status(200).json(movie);
  } catch (error) {
    console.log(error);
    return response.status(400).end();
  }
}
