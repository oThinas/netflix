/** Components */
import { BillboardActions } from './Actions';
import { BillboardDescription } from './Description';
import { BillboardTitle } from './Title';

/** Interfaces */
import { IBillboardContent } from '@/interfaces/billboardContent';

type BillboardContentProps = IBillboardContent;

export function BillboardContent(props: BillboardContentProps) {
  return (
    <div className='absolute top-[30%] ml-4 md:top-[40%] md:ml-16'>
      <BillboardTitle title={props.data?.title} />
      <BillboardDescription description={props.data?.description} />
      <BillboardActions data={props.data} onOpenModal={() => props.onOpenModal()} />
    </div>
  );
}
