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

    const movies = await prismadb.movie.findMany();

    return response.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return response.status(400).end();
  }
}
