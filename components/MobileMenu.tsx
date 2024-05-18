/** Core */
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useCallback, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

/** Components */
import { Text } from './Text';

export function MobileMenu() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const handleToggleMobileMenu = useCallback(
    () => {
      setIsMobileMenuShown((prevState) => !prevState);
    },
    [],
  );

  return (
    <DropdownMenu.Root open={isMobileMenuShown} onOpenChange={() => handleToggleMobileMenu()}>
      <DropdownMenu.Trigger asChild tabIndex={0}>
        <div className='relative ml-8 flex cursor-pointer items-center gap-2 lg:hidden' onClick={() => handleToggleMobileMenu()}>
          <Text as='p' className='text-sm'>
            Browse
          </Text>

          <BsChevronDown className={`text-white transition ${isMobileMenuShown ? 'rotate-180' : 'rotate-0'}`} />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='absolute left-0 top-8 flex w-56 animate-slideDownAndFade flex-col gap-4 border-2 border-gray-800 bg-black py-5 transition will-change-[opacity,transform]'
        >
          <DropdownMenu.Item className='px-3 text-center hover:outline-none hover:ring-0'>
            <Text as='span' className='hover:underline'>
              Home
            </Text>
          </DropdownMenu.Item>

          <DropdownMenu.Item className='px-3 text-center hover:outline-none hover:ring-0'>
            <Text as='span' className='hover:underline'>
              Series
            </Text>
          </DropdownMenu.Item>

          <DropdownMenu.Item className='px-3 text-center hover:outline-none hover:ring-0'>
            <Text as='span' className='hover:underline'>
              Films
            </Text>
          </DropdownMenu.Item>

          <DropdownMenu.Item className='px-3 text-center hover:outline-none hover:ring-0'>
            <Text as='span' className='hover:underline'>
              My list
            </Text>
          </DropdownMenu.Item>

          <DropdownMenu.Item className='px-3 text-center hover:outline-none hover:ring-0'>
            <Text as='span' className='hover:underline'>
              New & Popular
            </Text>
          </DropdownMenu.Item>

          <DropdownMenu.Item className='px-3 text-center hover:outline-none hover:ring-0'>
            <Text as='span' className='hover:underline'>
              Browse by languages
            </Text>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
