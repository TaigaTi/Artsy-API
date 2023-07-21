import { Module } from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { GalleriesController } from './galleries.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GalleriesController],
  providers: [GalleriesService],
  imports: [PrismaModule],
})
export class GalleriesModule {}
