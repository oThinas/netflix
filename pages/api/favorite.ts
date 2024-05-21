/** Core */
import { without } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';

/** Libs */
import prismadb from '@/lib/prismadb';
import { serverAuth } from '@/lib/serverAuth';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      return handlePostRequest(request, response);
    }

    if (request.method === 'DELETE') {
      return handleDeleteRequest(request, response);
    }

    return response.status(405).end();
  } catch (error) {
    console.log(error);
    return response.status(400).end();
  }
}

async function handlePostRequest(request: NextApiRequest, response: NextApiResponse) {
  const { currentUser } = await serverAuth(request, response);
  const { movieId } = request.body;

  const movie = await prismadb.movie.findUnique({ where: { id: movieId } });
  if (!movie) {
    throw new Error('Invalid ID');
  }

  const user = await prismadb.user.update({
    where: { email: currentUser.email || '' },
    data: { favoriteIds: { push: movieId } },
  });

  return response.status(200).json(user);
}

async function handleDeleteRequest(request: NextApiRequest, response: NextApiResponse) {
  const { currentUser } = await serverAuth(request, response);
  const { movieId } = request.body;

  const movie = await prismadb.movie.findUnique({ where: { id: movieId } });
  if (!movie) {
    throw new Error('Invalid ID');
  }

  const favoriteIds = without(currentUser.favoriteIds, movieId);
  const user = await prismadb.user.update({
    where: { email: currentUser.email || '' },
    data: { favoriteIds },
  });

  return response.status(200).json(user);
}
