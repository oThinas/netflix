/** Core */
import { Movie } from '@prisma/client';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

/** Components */
import { Billboard } from '@/components/Billboard';
import { MovieList } from '@/components/MovieList';
import { Navbar } from '@/components/Navbar';

/** Hooks */
import { useFavorites } from '@/hooks/useFavorites';
import { useMovieList } from '@/hooks/useMovieList';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function Home() {
  const { data: movies = [] } = useMovieList() as { data: Movie[] };
  const { data: favoriteMovies = [] } = useFavorites() as { data: Movie[] };

  return (
    <>
      <Navbar />

      <Billboard />

      <div className='flex flex-col gap-4'>
        <MovieList title='Trending now' data={movies} />

        <MovieList title='My list' data={favoriteMovies} />
      </div>
    </>
  );
}
