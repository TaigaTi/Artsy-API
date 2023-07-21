import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArtistsModule } from './artists/artists.module';
import { GalleriesModule } from './galleries/galleries.module';
import { PiecesModule } from './pieces/pieces.module';

@Module({
  imports: [PrismaModule, ArtistsModule, GalleriesModule, PiecesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
