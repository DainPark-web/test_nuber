import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('podcasts')
export class PodcastsController {
  @Get()
  getPodcasts() {
    return 'Hi';
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
