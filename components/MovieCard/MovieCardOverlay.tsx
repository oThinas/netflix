/** Core */
import Image from 'next/image';

/** Components */
import { MovieCardActions } from './MovieCardActions';
import { MovieCardInfo } from './MovieCardInfo';

/** Interfaces */
import { IIsOverlayOpen, IMovieCardOverlay, ISetOverlayOpen } from '@/interfaces/movieCardOverlay';
import { useEffect, useRef } from 'react';

type MovieCardOverlayProps = IMovieCardOverlay & IIsOverlayOpen & ISetOverlayOpen;

export function MovieCardOverlay({ setIsOverlayOpen, ...props }: MovieCardOverlayProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOverlayOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside, true);

    return () => document.removeEventListener('click', handleClickOutside, true);
  }, [setIsOverlayOpen]);

  return (
    <div
      className='visible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-300 duration-200
      group-hover:translate-x-[2vw] group-hover:translate-y-[-6vw] group-hover:scale-110 group-hover:opacity-100
      data-[open=open]:translate-x-[2vw] data-[open=open]:translate-y-[-6vw] data-[open=open]:scale-110
      data-[open=open]:opacity-100'
      data-open={props.isOverlayOpen ? 'open' : 'close'} ref={ref}
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
