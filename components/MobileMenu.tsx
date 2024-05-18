/** Core */
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useCallback, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

/** Components */
import { Text } from './Text';

interface MobileMenuProps {
  items: string[];
}

export function MobileMenu(props: MobileMenuProps) {
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
          className='absolute -left-9 top-2 flex w-56 animate-slideDownAndFade flex-col gap-4 border-2 border-gray-800 bg-black py-5 transition will-change-[opacity,transform]'
        >
          {props.items.map((item) => (
            <DropdownMenu.Item key={item} className='px-3 text-center hover:outline-none hover:ring-0'>
              <Text as='span' className='hover:underline'>
                {item}
              </Text>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
