/** Components */
import { BillboardActions } from './BillboardActions';
import { BillboardDescription } from './BillboardDescription';
import { BillboardTitle } from './BillboardTitle';

/** Interfaces */
import { IBillboardContent } from '@/interfaces/billboardContent';

type BillboardContentProps = IBillboardContent;

export function BillboardContent(props: BillboardContentProps) {
  return (
    <div className='absolute top-[30%] ml-4 md:ml-16 lg:top-[40%]'>
      <BillboardTitle title={props.data?.title} />
      <BillboardDescription description={props.data?.description} />
      <BillboardActions data={props.data} onOpenModal={() => props.onOpenModal()} />
    </div>
  );
}
