/** Core */
import { InputHTMLAttributes, LegacyRef, RefAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
  label: string,
}

export function RawInput(props: InputProps, ref: LegacyRef<HTMLInputElement>) {
  return props.type === 'submit' ? (
    <input
      {...props}
      value={props.label}
      ref={ref}
      className={twMerge(
        'w-full rounded-md bg-red-600 py-3 text-white transition',
        'hover:bg-red-700 focus-visible:outline focus-visible:outline-transparent focus-visible:bg-red-700',
        props.className,
      )}
    />
  ) : (
    <div className='relative'>
      <input
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        id={props.id}
        aria-labelledby={props.id}
        placeholder=' '
        tabIndex={0}
        {...props}
        ref={ref}
        className={twMerge(
          'peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pb-1 pt-6 font-medium text-white focus:outline-none focus:ring-0',
          props.className,
        )}
      />

      <label
        className='absolute left-6 top-3 z-10 origin-[0] -translate-y-3 scale-75 font-medium text-zinc-400 duration-300
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75'
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
}

export const Input = forwardRef(RawInput);
