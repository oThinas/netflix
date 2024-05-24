/** Core */
import { Movie } from '@prisma/client';

export interface IBillboardContent {
  data: Movie | undefined;
  onOpenModal(): void;
}
