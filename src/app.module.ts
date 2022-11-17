import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { RatsController } from './rats/rats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, RatsController],
  providers: [AppService],
})
export class AppModule {}
