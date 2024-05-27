/** Core */
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from 'react-icons/ai';

/** Components */
import { Button } from '../Button';

export function InfoModalCloseButton() {
  return (
    <Dialog.Close asChild>
      <Button className='absolute right-3 top-3 size-10 rounded-full bg-black/70'>
        <AiOutlineClose className='text-white' size={20} />
      </Button>
    </Dialog.Close>
  );
}
