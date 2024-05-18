/** Core */
import Image from 'next/image';
import { CSSProperties } from 'react';

interface ProfileImageProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  className?: string;
}

export function ProfileImage({ width = 'auto', height = 'auto', ...props }: ProfileImageProps) {
  return (
    <Image src='/images/default-blue.png' alt='Profile image. A cartoon blue face' {...props} style={{ height, width }} width={320} height={320} />
  );
}
