/** Interfaces */
import { IDataMovie } from './movie';

export interface IMovieCardOverlay extends IDataMovie {
  onPlay(): void;
  onOpenModal(): void;
}
