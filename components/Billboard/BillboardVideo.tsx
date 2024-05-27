/** Interfaces */
import { IBillboardContent } from '@/interfaces/billboardContent';

type BillboardVideoProps = Pick<IBillboardContent, 'data'>;

export function BillboardVideo(props: BillboardVideoProps) {
  return (
    <video
      autoPlay muted loop poster={props.data?.thumbnailUrl} src={props.data?.videoUrl}
      className='h-[56.25vw] w-full object-cover brightness-[60%]'
    />
  );
}
