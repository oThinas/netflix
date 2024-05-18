/** Core */
import { ReactNode } from 'react';

/** Components */
import { Text, TextProps } from './Text';

interface NavbarItemProps extends Omit<TextProps<'span'>, 'as'> {
  children: ReactNode;
}

export function NavbarItem(props: NavbarItemProps) {
  return (
    <Text {...props} as='span' className='cursor-pointer text-white transition hover:text-gray-300'>
      {props.children}
    </Text>
  );
}
