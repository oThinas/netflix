/** Components */
import { Text } from '../Text';

/** Interfaces */
import { Movie } from '@prisma/client';

type BillboardDescription = Partial<Pick<Movie, 'description'>>;

export function BillboardDescription(props: BillboardDescription) {
  return (
    <Text as='p' className='mt-3 w-[90%] text-[8px] drop-shadow-xl md:mt-8 md:w-4/5 md:text-lg lg:w-1/2'>
      {props?.description}
    </Text>
  );
}
