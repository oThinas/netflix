/** Components */
import { Text } from '../Text';

/** Interfaces */
import { IMovieOrUndefined } from '@/interfaces/movie';

type InfoModalTitleProps = IMovieOrUndefined<'title'>;

export function InfoModalTitle(props: InfoModalTitleProps) {
  return (
    <Text as='p' className='mb-8 h-full text-3xl font-bold md:text-4xl lg:text-5xl'>
      {props?.title}
    </Text>
  );
}
