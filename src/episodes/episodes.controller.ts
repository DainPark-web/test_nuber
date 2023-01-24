import { Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';

@Controller('podcasts/:id/episodes')
export class EpisodesController {
  @Get()
  getEpisodes(@Param('id') podId: string) {
    return `Podcast: ${podId}`;
  }

  @Post()
  postEpisodes() {
    return 'Ep Post';
  }

  @Patch('/:episodeId')
  patchEpisode(
    @Param('id') podId: string,
    @Param('episodeId') episodeId: string,
  ) {
    return `podcast ${podId}  episode${episodeId}`;
  }

  @Delete('/:episodeId')
  deleteEpisode(
    @Param('id') podId: string,
    @Param('episodeId') episodeId: string,
  ) {
    return `podcast ${podId}  episode${episodeId} delete`;
  }
}
