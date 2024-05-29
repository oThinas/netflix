/** Interfaces */
import { IDataMovie } from './movie';

export interface IMovieCardOverlay extends IDataMovie {
  onPlay(): void;
  onOpenModal(): void;
}

export interface IIsOverlayOpen {
  isOverlayOpen: boolean;
}

export interface ISetOverlayOpen {
  setIsOverlayOpen(value: boolean): void;
}
