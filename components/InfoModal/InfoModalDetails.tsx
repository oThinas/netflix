/** Components */
import { Text } from '../Text';

/** Interfaces */
import { IDataMovieOrUndefined } from '@/interfaces/movie';

type InfoModalDetailsProps = IDataMovieOrUndefined;

export function InfoModalDetails(prosp: InfoModalDetailsProps) {
  return (
    <div className='flex flex-col gap-2 px-12 py-8'>
      <Text as='p' className='text-lg font-semibold text-green-400'>
        New
      </Text>

      <Text as='p' className='text-lg'>
        {prosp.data?.duration}
      </Text>

      <Text as='p' className='text-lg'>
        {prosp.data?.genre}
      </Text>

      <Text as='p' className='text-lg'>
        {prosp.data?.description}
      </Text>
    </div>
  );
}
