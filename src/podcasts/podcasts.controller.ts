import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastService: PodcastsService) {}
  @Get()
  getPodcasts() {
    return this.podcastService.getAll();
  }

  @Post()
  postPodcasts() {
    return 'Post';
  }

  @Get('/:id')
  getPodcast(@Param('id') podId: string) {
    return `${podId} podcast`;
  }

  @Patch('/:id')
  patchPodcast(@Param('id') podId: string) {
    return `${podId} podcast patch`;
  }
  @Delete('/:id')
  deletePodcast(@Param('id') podId: string) {
    return `${podId} podcast delete`;
  }
}
