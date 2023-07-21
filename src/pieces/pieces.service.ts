import { Injectable } from '@nestjs/common';
import { CreatePieceDto } from './dto/create-piece.dto';
import { UpdatePieceDto } from './dto/update-piece.dto';
import { Printer } from 'prettier';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PiecesService {
  constructor(private prisma: PrismaService) {}

  create(createPieceDto: CreatePieceDto) {
    return this.prisma.piece.create({data: createPieceDto});
  }

  findAll() {
    return this.prisma.piece.findMany();
  }

  findOne(id: number) {
    return this.prisma.piece.findUnique({where: {id}});
  }

  update(id: number, updatePieceDto: UpdatePieceDto) {
    return this.prisma.piece.update({where: {id}, data: updatePieceDto});
  }

  remove(id: number) {
    return this.prisma.piece.delete({where:{id}});
  }
}
