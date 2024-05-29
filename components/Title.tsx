/** Core */
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

export function Title(props: TitleProps) {
  const Heading = `${props.as}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return (
    <Heading {...props} className={twMerge('text-4xl font-semibold text-white', props.className)}>
      {props.children}
    </Heading>
  );
}
