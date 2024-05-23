/** Core */
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

/** Components */
import { Billboard } from '@/components/Billboard';
import { InfoModal } from '@/components/InfoModal';
import { MovieList } from '@/components/MovieList';
import { Navbar } from '@/components/Navbar';

/** Hooks */
import { useFavorites } from '@/hooks/useFavorites';
import { useInfoModal } from '@/hooks/useInfoModal';
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
  const { data: movies = [] } = useMovieList();
  const { data: favoriteMovies = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={() => closeModal()} />

      <Navbar />

      <Billboard />

      <div className='flex flex-col gap-4'>
        <MovieList title='Trending now' data={movies} />

        <MovieList title='My list' data={favoriteMovies} />
      </div>
    </>
  );
}
