/** Core */
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/** Components */
import { PlayButton } from '../PlayButton';

/** Interfaces */
import { IBillboardContent } from '@/interfaces/billboardContent';

type BillboardActionsProps = IBillboardContent;

export function BillboardActions(props: BillboardActionsProps) {
  return (
    <div className='mt-3 flex items-center gap-3 md:mt-4'>
      <PlayButton movieId={props.data?.id} />

      <Dialog.Trigger
        className='flex w-auto cursor-pointer items-center justify-center gap-1 rounded-md bg-white/30 px-2 py-1
        text-xs font-semibold text-white transition hover:bg-white/20
        focus-visible:outline focus-visible:outline-transparent md:px-4 md:py-2 lg:text-lg'
        onClick={() => props.onOpenModal()}
      >
        <AiOutlineInfoCircle />

        More info
      </Dialog.Trigger>
    </div>
  );
}
