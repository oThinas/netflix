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
    await serverAuth(request);

    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const randomMovie = (await prismadb.movie.findMany({ take: 1, skip: randomIndex }))[0];

    return response.status(200).json(randomMovie);
  } catch (error) {
    console.log(error);
    return response.status(400).end();
  }
}
