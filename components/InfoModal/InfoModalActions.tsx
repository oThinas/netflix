/** Components */
import { FavoriteButton } from '../FavoriteButton';
import { PlayButton } from '../PlayButton';

/** Interfaces */
import { IMovieOrUndefined } from '@/interfaces/movie';

type InfoModalActionsProps = IMovieOrUndefined<'id'>;

export function InfoModalActions(props: InfoModalActionsProps) {
  return (
    <div className='flex items-center gap-4'>
      <PlayButton movieId={props?.id} />

      <FavoriteButton movieId={props?.id} />
    </div>
  );
}
