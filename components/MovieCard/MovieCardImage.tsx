/** Core */
import Image from 'next/image';

/** Interfaces */
import { IDataMovie } from '@/interfaces/movie';

type MovieCardImageProps = IDataMovie

export function MovieCardImage(props: MovieCardImageProps) {
  return (
    <Image
      src={props.data.thumbnailUrl} alt={`Thumbnail of ${props.data.title}`} width={1920} height={1000}
      className='cursor-pointer rounded-md object-cover shadow-xl transition delay-300
        group-hover:opacity-90 sm:group-hover:opacity-0'
      style={{ width: '100%', height: '100%' }}
    />
  );
}
