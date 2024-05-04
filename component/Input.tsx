/** Core */
import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className='relative'>
      <input
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        id={props.id}
        aria-labelledby={props.id}
        placeholder=' '
        {...props}
        className={twMerge(
          'peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pb-1 pt-6 font-medium text-white focus:outline-none focus:ring-0',
          className,
        )}
      />

      <label
        className='absolute left-6 top-4 z-10 origin-[0] -translate-y-3 scale-75 font-medium text-zinc-400 duration-300
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75'
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
  );
}
