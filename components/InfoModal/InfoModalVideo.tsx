/** Interfaces */
import { IDataMovieOrUndefined } from '@/interfaces/movie';

type InfoModalVideoProps = IDataMovieOrUndefined

export function InfoModalVideo(props: InfoModalVideoProps) {
  return (
    <video
      src={props.data?.videoUrl} poster={props.data?.thumbnailUrl} autoPlay loop muted
      className='size-full object-cover brightness-[60%]'
    />
  );
}
