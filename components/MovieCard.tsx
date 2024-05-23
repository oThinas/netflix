/** Core */
import { Movie } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

/** Components */
import { Button } from './Button';
import { FavoriteButton } from './FavoriteButton';
import { Text } from './Text';

interface MovieCardProps {
  data: Movie;
}

export function MovieCard(props: MovieCardProps) {
  const router = useRouter();

  const handlePlay = useCallback(
    () => {
      router.push(`/watch/${props.data.id}`);
    },
    [props.data, router],
  );

  return (
    <div className='group relative h-[12vw] bg-zinc-900'>
      <Image
        src={props.data.thumbnailUrl} alt={`Thumbnail of ${props.data.title}`} width={1920} height={1000}
        className='cursor-pointer rounded-md object-cover shadow-xl transition delay-300
        group-hover:opacity-90 sm:group-hover:opacity-0'
        style={{ width: '100%', height: '100%' }}
      />

      <div
        className='invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-300 duration-200
        group-hover:translate-x-[2vw] group-hover:translate-y-[-6vw] group-hover:scale-110 group-hover:opacity-100
        sm:visible'
      >
        <Image
          src={props.data.thumbnailUrl} alt={`Thumbnail of ${props.data.title}`} width={1920} height={1000}
          className='cursor-pointer rounded-t-md object-cover shadow-xl transition'
          style={{ width: '100%', height: '100%' }}
        />

        <div className='absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4'>
          <div className='flex items-center gap-3'>
            <Button
              className='size-6 rounded-full bg-white hover:bg-neutral-300 lg:size-10'
              onClick={() => handlePlay()}
            >
              <BsFillPlayFill size={32} />
            </Button>

            <FavoriteButton movieId={props.data.id} />
          </div>

          <Text as='p' className='mt-4 font-semibold text-green-400'>
            New {'\n'}
            <Text as='span'>
              2023
            </Text>
          </Text>

          <div className='mt-4 flex items-center gap-2'>
            <Text as='p' className='text-[10px] lg:text-sm'>
              {props.data.duration}
            </Text>
          </div>

          <div className='mt-4 flex items-center gap-2'>
            <Text as='p' className='text-[10px] lg:text-sm'>
              {props.data.genre}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
