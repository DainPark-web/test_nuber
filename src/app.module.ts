import { Module } from '@nestjs/common';

import { PodcastsModule } from './podcasts/podcasts.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [PodcastsModule, EpisodesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
