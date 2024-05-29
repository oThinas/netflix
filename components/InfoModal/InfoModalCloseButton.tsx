/** Core */
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from 'react-icons/ai';

/** Components */
import { useWindowSize } from '@/hooks/useWindowSize';
import { Button } from '../Button';

export function InfoModalCloseButton() {
  const size = useWindowSize();
  const iconSize = size === 'sm' ? 16 : 20;

  return (
    <Dialog.Close asChild>
      <Button className='absolute right-3 top-3 size-8 rounded-full bg-black/70 sm:size-10'>
        <AiOutlineClose className='text-white' size={iconSize} />
      </Button>
    </Dialog.Close>
  );
}
