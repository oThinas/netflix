/** Components */
import { Text } from '../Text';

/** Interfaces */
import { IDataMovieOrUndefined } from '@/interfaces/movie';

const detailsFields: Array<'duration' | 'genre' | 'description'> = ['duration', 'genre', 'description'];

type InfoModalDetailsProps = IDataMovieOrUndefined;

export function InfoModalDetails(props: InfoModalDetailsProps) {
  return (
    <div className='flex flex-col gap-2 px-12 py-8'>
      <Text as='p' className='text-lg font-semibold text-green-400'>
        New
      </Text>

      {detailsFields.map((field) => (
        <Text as='p' className='text-lg' key={field}>
          {props.data?.[field]}
        </Text>
      ))}
    </div>
  );
}
