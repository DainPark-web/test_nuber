import { Injectable } from '@nestjs/common';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = []; //just for now
  getAll(): Podcast[] {
    return this.podcasts;
  }

  createPodCast(podcastData: Podcast) {
    this.podcasts.push(podcastData);
    console.log(this.podcasts);
    return {
      ok: true,
    };
  }
}
