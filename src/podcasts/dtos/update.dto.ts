import { Episode } from 'src/episodes/entities/episode.entity';
export class UpdateInput {
  title?: string;
  category?: string;
  rating?: number;
  episodes?: Episode[];
}
