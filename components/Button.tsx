/** Core */
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = HTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <button
      tabIndex={0}
      {...props}
      className={twMerge(
        'flex cursor-pointer items-center justify-center transition',
        'focus-visible:outline focus-visible:outline-transparent',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
