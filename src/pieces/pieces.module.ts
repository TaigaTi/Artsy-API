import { Module } from '@nestjs/common';
import { PiecesService } from './pieces.service';
import { PiecesController } from './pieces.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PiecesController],
  providers: [PiecesService],
  imports: [PrismaModule],
})
export class PiecesModule {}
