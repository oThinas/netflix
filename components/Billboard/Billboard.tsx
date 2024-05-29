/** Core */
import { useCallback } from 'react';

/** Components */
import { BillboardContent } from './BillboardContent';
import { BillboardVideo } from './BillboardVideo';

/** Hooks */
import { useBillboard } from '@/hooks/useBillboard';
import { useInfoModal } from '@/hooks/useInfoModal';

export function Billboard() {
  const { data } = useBillboard();
  const { setMovieId } = useInfoModal();

  const handleOpenModal = useCallback(
    () => {
      if (data?.id) setMovieId(data.id);
    },
    [data, setMovieId],
  );

  return (
    <div className='relative h-[56.25vw]'>
      <BillboardVideo data={data} />
      <BillboardContent data={data} onOpenModal={() => handleOpenModal()} />
    </div>
  );
}
