/** Core */
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type AsProp = 'p' | 'span';

export interface TextProps<T extends AsProp> extends HTMLAttributes<T extends 'p' ? HTMLParagraphElement : T extends 'span' ? HTMLSpanElement : never> {
  as: T;
}

export function Text(props: TextProps<AsProp>) {
  const Element = props.as;

  return (
    <Element {...props} className={twMerge('text-white', props.className)}>
      {props.children}
    </Element>
  );
}
