/** Interfaces */
import { IDataMovieOrUndefined } from './movie';

export interface IBillboardContent extends IDataMovieOrUndefined {
  onOpenModal(): void;
}
