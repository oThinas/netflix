/** Core */
import Image from 'next/image';

/** Components */
import { MovieCardActions } from './MovieCardActions';
import { MovieCardInfo } from './MovieCardInfo';

/** Interfaces */
import { IMovieCardOverlay } from '@/interfaces/movieCardOverlay';

type MovieCardOverlayProps = IMovieCardOverlay;

export function MovieCardOverlay(props: MovieCardOverlayProps) {
  return (
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
        <MovieCardActions data={props.data} onPlay={() => props.onPlay()} onOpenModal={() => props.onOpenModal()} />

        <MovieCardInfo data={props.data} />
      </div>
    </div>
  );
}
