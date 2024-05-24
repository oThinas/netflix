/** Core */
import * as Dialog from '@radix-ui/react-dialog';
import { useCallback } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/** Components */
import { PlayButton } from './PlayButton';
import { Text } from './Text';

/** Hooks */
import { useBillboard } from '@/hooks/useBillboard';
import { useInfoModal } from '@/hooks/useInfoModal';

export function Billboard() {
  const { data } = useBillboard();
  const { setMovieId } = useInfoModal();

  const handleOpenModal = useCallback(
    () => {
      if (data?.id) setMovieId(data.id);
    },
    [data, setMovieId],
  );

  return (
    <div className='relative h-[56.25vw]'>
      <video
        autoPlay muted loop poster={data?.thumbnailUrl} src={data?.videoUrl}
        className='h-[56.25vw] w-full object-cover brightness-[60%]'
      />

      <div className='absolute top-[30%] ml-4 md:top-[40%] md:ml-16'>
        <Text as='p' className='h-full w-1/2 text-xl font-bold drop-shadow-xl md:text-5xl lg:text-6xl'>
          {data?.title}
        </Text>

        <Text as='p' className='mt-3 w-[90%] text-[8px] drop-shadow-xl md:mt-8 md:w-4/5 md:text-lg lg:w-1/2'>
          {data?.description}
        </Text>

        <div className='mt-3 flex items-center gap-3 md:mt-4'>
          <PlayButton movieId={data?.id} />

          <Dialog.Trigger
            className='flex w-auto cursor-pointer items-center justify-center gap-1 rounded-md bg-white/30 px-2 py-1
            text-xs font-semibold text-white transition hover:bg-white/20
            focus-visible:outline focus-visible:outline-transparent md:px-4 md:py-2 lg:text-lg'
            onClick={() => handleOpenModal()}
          >
            <AiOutlineInfoCircle />

            More info
          </Dialog.Trigger>
        </div>
      </div>
    </div>
  );
}
