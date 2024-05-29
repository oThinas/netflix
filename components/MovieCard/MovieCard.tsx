/** Core */
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

/** Components */
import { MovieCardImage } from './MovieCardImage';
import { MovieCardOverlay } from './MovieCardOverlay';

/** Hooks */
import { useInfoModal } from '@/hooks/useInfoModal';

/** Interfaces */
import { IDataMovie } from '@/interfaces/movie';

type MovieCardProps = IDataMovie;

export function MovieCard(props: MovieCardProps) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const router = useRouter();
  const { setMovieId } = useInfoModal();

  const handlePlay = useCallback(
    () => {
      router.push(`/watch/${props.data.id}`);
    },
    [props.data, router],
  );

  const handleOpenModal = useCallback(
    () => {
      setMovieId(props.data.id);
    },
    [props.data, setMovieId],
  );

  const handleOpenOverlay = useCallback(
    () => {
      setIsOverlayOpen(true);
    },
    [setIsOverlayOpen],
  );

  return (
    <div className='group relative h-[12vw] bg-zinc-900'>
      <MovieCardImage data={props.data} isOverlayOpen={isOverlayOpen} onClick={() => handleOpenOverlay()} />

      <MovieCardOverlay
        data={props.data} isOverlayOpen={isOverlayOpen} onPlay={() => handlePlay()}
        onOpenModal={() => handleOpenModal()} setIsOverlayOpen={setIsOverlayOpen}
      />
    </div>
  );
}
