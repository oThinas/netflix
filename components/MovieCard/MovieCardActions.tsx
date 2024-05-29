/** Components */
import * as Dialog from '@radix-ui/react-dialog';
import { BiChevronDown } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';

/** Components */
import { Button } from '../Button';
import { FavoriteButton } from '../FavoriteButton';

/** Interfaces */
import { IMovieCardOverlay } from '@/interfaces/movieCardOverlay';

type MovieCardActionsProps = IMovieCardOverlay;

export function MovieCardActions(props: MovieCardActionsProps) {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Button
        className='size-6 rounded-full bg-white hover:bg-neutral-300 lg:size-10'
        onClick={() => props.onPlay()}
      >
        <BsFillPlayFill size={32} />
      </Button>

      <FavoriteButton movieId={props.data.id} />

      <Dialog.Trigger
        className='group/item flex size-6 cursor-pointer items-center justify-center rounded-full border-2 border-white
        transition hover:border-neutral-300 sm:ml-auto lg:size-10'
        onClick={() => props.onOpenModal()}
      >
        <BiChevronDown className='text-white group-hover/item:text-neutral-300' size={32} />
      </Dialog.Trigger>
    </div>
  );
}
