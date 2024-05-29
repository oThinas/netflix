/** Core */
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

/** Components */
import { Button } from './Button';

/** Hooks */
import { useWindowSize } from '@/hooks/useWindowSize';

interface PlayButtonProps {
  movieId: string | undefined;
}

export function PlayButton(props: PlayButtonProps) {
  const router = useRouter();
  const size = useWindowSize();
  const iconSize = size === 'sm' ? 20 : 30;

  const handlePlay = useCallback(
    () => {
      router.push(`/watch/${props.movieId}`);
    },
    [props.movieId, router],
  );

  return (
    <Button
      className='w-auto rounded-md bg-white px-2 py-1 text-sm font-semibold hover:bg-neutral-300
      md:px-4 md:py-2 lg:text-lg'
      onClick={() => handlePlay()}
    >
      <BsFillPlayFill size={iconSize} />

      Play
    </Button>
  );
}
