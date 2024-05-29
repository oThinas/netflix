/** Core */
import Image from 'next/image';

/** Interfaces */
import { IDataMovie } from '@/interfaces/movie';
import { IIsOverlayOpen } from '@/interfaces/movieCardOverlay';

interface MovieCardImageProps extends IDataMovie, IIsOverlayOpen {
  onClick(): void;
}

export function MovieCardImage(props: MovieCardImageProps) {
  return (
    <Image
      src={props.data.thumbnailUrl} alt={`Thumbnail of ${props.data.title}`} width={1920} height={1000}
      className={`${props.isOverlayOpen ? 'opacity-0' : 'opacity-100'} cursor-pointer rounded-md object-cover shadow-xl transition delay-300
      group-hover:opacity-0`}
      onClick={() => props.onClick()}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
