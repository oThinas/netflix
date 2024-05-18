/** Core */
import { ReactNode } from 'react';

/** Components */
import { Text } from './Text';

interface NavbarItemProps {
  children: ReactNode;
}

export function NavbarItem(props: NavbarItemProps) {
  return (
    <Text as='span' className='cursor-pointer text-white transition hover:text-gray-300'>
      {props.children}
    </Text>
  );
}
