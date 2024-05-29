/** Core */
import { Movie } from '@prisma/client';
import { isEmpty } from 'lodash';

/** Components */
import { MovieCard } from './MovieCard';
import { Text } from './Text';

interface MovieListProps {
  data: Movie[];
  title: string;
}

export function MovieList(props: MovieListProps) {
  if (isEmpty(props.data)) {
    return null;
  }

  return (
    <div className='mt-4 space-y-8 px-4 md:px-12'>
      <div>
        <Text as='p' className='mb-4 text-lg font-semibold md:text-xl lg:text-2xl'>
          {props.title}
        </Text>

        <div className='grid grid-cols-4 gap-2'>
          {props.data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
