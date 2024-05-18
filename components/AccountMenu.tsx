/** Core */
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signOut } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

/** Components */
import { ProfileImage } from './ProfileImage';
import { Text } from './Text';


export function AccountMenu() {
  const [isAccountMenuShown, setIsAccountMenuShown] = useState(false);

  const handleSignOut = useCallback(
    async () => {
      await signOut();
    },
    [],
  );

  const handleToggleAccountMenu = useCallback(
    () => {
      setIsAccountMenuShown((prevState) => !prevState);
    },
    [],
  );

  return (
    <DropdownMenu.Root open={isAccountMenuShown} onOpenChange={() => handleToggleAccountMenu()}>
      <DropdownMenu.Trigger asChild tabIndex={0}>
        <div className='relative flex cursor-pointer items-center gap-2'>
          <div className='size-6 overflow-hidden rounded-md lg:size-10'>
            <ProfileImage />
          </div>
          <BsChevronDown className={`text-white transition ${isAccountMenuShown ? 'rotate-180' : 'rotate-0'}`} />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal >
        <DropdownMenu.Content
          className='absolute -right-6 top-1 w-56 animate-slideDownAndFade flex-col border-2 border-gray-800 bg-black py-5 transition
          will-change-[opacity,transform] lg:-right-9'
        >
          <DropdownMenu.Item className='group/item flex w-full items-center gap-3 px-3 hover:outline-none hover:ring-0'>
            <ProfileImage className='rounded-md' width='32px' />

            <Text as='p' className='text-sm group-hover/item:underline'>
              Username
            </Text>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className='my-4 h-px border-0 bg-gray-600' />

          <DropdownMenu.Item className='px-3 text-center hover:outline-none hover:ring-0'>
            <Text as='span' className='text-sm hover:underline' onClick={() => handleSignOut()}>
              Sign out of Netflix
            </Text>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
