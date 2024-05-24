/** Core */
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from 'react-icons/ai';

/** Components */
import { Button } from './Button';
import { FavoriteButton } from './FavoriteButton';
import { PlayButton } from './PlayButton';
import { Text } from './Text';

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
        className='fixed left-1/2 top-1/2 z-50 mx-auto flex w-auto max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col
        overflow-hidden rounded-md bg-zinc-900 drop-shadow-md duration-300'
      >
        <div className='relative h-96'>
          <video
            src={data?.videoUrl} poster={data?.thumbnailUrl} autoPlay loop muted
            className='size-full object-cover brightness-[60%]'
          />

          <Dialog.Close asChild>
            <Button className='absolute right-3 top-3 size-10 rounded-full bg-black/70'>
              <AiOutlineClose className='text-white' size={20} />
            </Button>
          </Dialog.Close>

          <div className='absolute bottom-[10%] left-10'>
            <Text as='p' className='mb-8 h-full text-3xl font-bold md:text-4xl lg:text-5xl'>
              {data?.title}
            </Text>

            <div className='flex items-center gap-4'>
              <PlayButton movieId={data?.id} />

              <FavoriteButton movieId={data?.id} />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 px-12 py-8'>
          <Text as='p' className='text-lg font-semibold text-green-400'>
            New
          </Text>

          <Text as='p' className='text-lg'>
            {data?.duration}
          </Text>

          <Text as='p' className='text-lg'>
            {data?.genre}
          </Text>

          <Text as='p' className='text-lg'>
            {data?.description}
          </Text>
        </div>
      </Dialog.Content>
    </Dialog.Portal >
  );
}
