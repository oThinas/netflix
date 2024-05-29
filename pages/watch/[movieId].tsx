/** Core */
import { Movie } from '@prisma/client';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

/** Components */
import { Text } from '@/components/Text';

/** Hooks */
import { useMovie } from '@/hooks/useMovie';

export default function WatchMovie() {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string) as { data: Movie };

  const handleGoBack = useCallback(
    () => {
      router.back();
    },
    [router],
  );


  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed z-10 flex w-full items-center gap-8 bg-black/70 p-4'>
        <AiOutlineArrowLeft className='cursor-pointer text-white' size={40} onClick={() => handleGoBack()} />

        <Text as='p' className='text-xl font-bold md:text-3xl'>
          <Text as='span' className='font-light'>
            Watching: {'\n'}
          </Text>

          {data?.title}
        </Text>
      </nav>

      <video src={data?.videoUrl} autoPlay controls className='size-full' />
    </div>
  );
}
