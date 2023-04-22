import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';

@Module({
  imports: [],
  controllers: [AppController, GithubController],
  providers: [GithubService],
})
export class AppModule {}
