/** Core */
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = HTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'w-full rounded-md bg-red-600 py-3 text-white transition',
        'hover:bg-red-700 focus-visible:outline focus-visible:outline-transparent focus-visible:bg-red-700',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
