/** Core */
import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  toggleModal(): void;
  setMovieId(movieId: string): void;
  movieId?: string;
}

export const useInfoModal = create<ModalStore>()((set) => ({
  movieId: undefined,
  isOpen: false,
  toggleModal() {
    set((state) => ({
      isOpen: !state.isOpen,
      movieId: !state.isOpen ? state.movieId : undefined,
    }));
  },
  setMovieId(movieId: string) {
    set(() => ({ movieId }));
  },
}));
