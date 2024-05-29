/** Components */
import { Text } from '../Text';

/** Interfaces */
import { Movie } from '@prisma/client';

type BillboardTitle = Partial<Pick<Movie, 'title'>>;

export function BillboardTitle(props: BillboardTitle) {
  return (
    <Text as='p' className='h-full w-1/2 text-xl font-bold drop-shadow-xl md:text-5xl lg:text-6xl'>
      {props?.title}
    </Text>
  );
}
