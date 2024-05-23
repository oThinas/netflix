/** Core */
import { useCallback, useEffect, useState } from 'react';

/** Components */

/** Hooks */
import { useInfoModal } from '@/hooks/useInfoModal';
import { useMovie } from '@/hooks/useMovie';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from './Button';
import { FavoriteButton } from './FavoriteButton';
import { PlayButton } from './PlayButton';
import { Text } from './Text';

interface InfoModalProps {
  onClose(): void;
  visible: boolean;
}

export function InfoModal(props: InfoModalProps) {
  const [isVisivle, setIsVisivle] = useState(Boolean(props.visible));

  const { movieId } = useInfoModal();
  const { data } = useMovie(movieId);

  useEffect(() => {
    setIsVisivle(Boolean(props.visible));
  }, [props.visible]);

  const handleClose = useCallback(
    () => {
      setIsVisivle(false);

      setTimeout(() => {
        props.onClose();
      }, 300);
    },
    [props],
  );

  if (!props.visible) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/80
      transition duration-300'
    >
      <div className='relative mx-auto w-auto max-w-3xl overflow-hidden rounded-md'>
        <div
          className={`${isVisivle ? 'scale-100' : 'scale-0'}
          relative flex-auto bg-zinc-900 drop-shadow-md duration-300`}
        >
          <div className='relative h-96'>
            <video
              src={data?.videoUrl} poster={data?.thumbnailUrl} autoPlay loop muted
              className='size-full object-cover brightness-[60%]'
            />

            <Button className='absolute right-3 top-3 size-10 rounded-full bg-black/70' onClick={() => handleClose()}>
              <AiOutlineClose className='text-white' size={20} />
            </Button>

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

          <div className='px-12 py-8'>
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
        </div>
      </div>
    </div>
  );
}
