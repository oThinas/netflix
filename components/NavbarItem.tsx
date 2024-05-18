/** Core */
import { ReactNode } from 'react';

interface NavbarItemProps {
  children: ReactNode;
}

export function NavbarItem(props: NavbarItemProps) {
  return (
    <div className='cursor-pointer text-white transition hover:text-gray-300'>
      {props.children}
    </div>
  );
}
