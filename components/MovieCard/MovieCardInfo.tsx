/** Components */
import { Text } from '../Text';

/** Interfaces */
import { IDataMovie } from '@/interfaces/movie';

const infoFields: Array<'duration' | 'genre'> = ['duration', 'genre'];

type MovieCardInfoProps = IDataMovie;

export function MovieCardInfo(props: MovieCardInfoProps) {
  return (
    <>
      <Text as='p' className='mt-4 text-xs font-semibold text-green-400 sm:text-sm md:text-base'>
        New {'\n'}
        <Text as='span'>
          2023
        </Text>
      </Text>

      {infoFields.map((field) => (
        <div className='mt-4 flex items-center gap-2' key={field}>
          <Text as='p' className='text-xs sm:text-sm md:text-base lg:text-sm' >
            {props.data[field]}
          </Text>
        </div>
      ))}
    </>
  );
}
