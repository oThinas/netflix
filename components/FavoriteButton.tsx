/** Core */
import { User } from '@prisma/client';
import { useCallback, useMemo } from 'react';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai';

/** Hooks */
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useFavorites } from '@/hooks/useFavorites';
import axios from 'axios';
import toast from 'react-hot-toast';

interface FavoriteButtonProps {
  movieId: string;
}

export function FavoriteButton(props: FavoriteButtonProps) {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser() as { data: User, mutate: any };

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(props.movieId);
  }, [currentUser, props.movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete('/api/favorite', { data: { movieId: props.movieId } });
    } else {
      response = await axios.post('/api/favorite', { movieId: props.movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [props.movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const handleFavorite = useCallback(() => {
    toast.promise(toggleFavorites(), {
      error: 'Failed to update favorite',
      loading: 'Updating favorite...',
      success: 'Favorite updated!',
    });
  }, [toggleFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      className='group/item flex size-6 cursor-pointer items-center justify-center rounded-full border-2 border-white
      transition hover:border-neutral-300 lg:size-10'
      onClick={() => handleFavorite()}
    >
      <Icon className='text-white group-hover/item:text-neutral-300' size={24} />
    </div>
  );
}
