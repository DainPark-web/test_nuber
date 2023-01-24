import { Injectable } from '@nestjs/common';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];
  getAll(): Podcast[] {
    return [];
  }
}
