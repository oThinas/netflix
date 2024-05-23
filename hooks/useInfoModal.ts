/** Core */
import { create } from 'zustand';

export interface ModalStore {
  isOpen: boolean;
  openModal(movieId?: string): void;
  closeModal(): void;
  movieId?: string;
}

export const useInfoModal = create<ModalStore>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal(movieId: string) {
    set({ isOpen: true, movieId });
  },
  closeModal() {
    set({ isOpen: false, movieId: undefined });
  },
}));
