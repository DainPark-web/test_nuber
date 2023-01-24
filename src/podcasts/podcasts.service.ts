import { Injectable } from '@nestjs/common';
import { UpdateInput } from './dtos/update.dto';
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

  getPodcast(id: string) {
    const pod = this.podcasts.find((po) => po.id === +id);
    if (!pod) {
      return {
        ok: false,
        error: 'notFound',
      };
    }
    return {
      ok: true,
      data: pod,
    };
  }

  deletePodcast(id: string) {
    const pod = this.podcasts.find((po) => po.id === +id);
    if (!pod) {
      return {
        ok: false,
        error: 'notFound',
      };
    }
    this.podcasts = this.podcasts.filter((pod) => pod.id !== +id);
    return {
      ok: true,
    };
  }

  updatePodcast(id: string, updateData: UpdateInput) {
    const pod = this.podcasts.find((po) => po.id === +id);
    if (!pod) {
      return {
        ok: false,
        error: 'notFound',
      };
    }
    this.deletePodcast(id);
    this.podcasts.push({
      ...pod,
      ...updateData,
    });

    return {
      ok: true,
    };
  }
}
