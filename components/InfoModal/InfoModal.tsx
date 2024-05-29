/** Core */
import * as Dialog from '@radix-ui/react-dialog';

/** Components */
import { InfoModalActions } from './InfoModalActions';
import { InfoModalCloseButton } from './InfoModalCloseButton';
import { InfoModalDetails } from './InfoModalDetails';
import { InfoModalTitle } from './InfoModalTitle';
import { InfoModalVideo } from './InfoModalVideo';

/** Hooks */
import { useInfoModal } from '@/hooks/useInfoModal';
import { useMovie } from '@/hooks/useMovie';

export function InfoModal() {
  const { movieId } = useInfoModal();
  const { data } = useMovie(movieId);

  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className='fixed inset-0 overflow-y-auto overflow-x-hidden bg-black/80 transition duration-300'
      />

      <Dialog.Content
        className='fixed left-1/2 top-1/2 z-50 mx-auto flex max-h-screen w-auto -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden
        rounded-md bg-zinc-900 drop-shadow-md duration-300 sm:max-w-3xl'
      >
        <div className='relative h-96'>
          <InfoModalVideo data={data} />

          <InfoModalCloseButton />

          <div className='absolute bottom-[10%] left-10'>
            <InfoModalTitle title={data?.title} />

            <InfoModalActions id={data?.id} />
          </div>
        </div>

        <InfoModalDetails data={data} />
      </Dialog.Content>
    </Dialog.Portal >
  );
}
