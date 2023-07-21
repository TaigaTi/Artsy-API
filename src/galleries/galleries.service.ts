import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GalleriesService {
  constructor(private prisma: PrismaService) {}

  create(createGalleryDto: CreateGalleryDto) {
    return this.prisma.gallery.createGalleryDto();
  }

  findAll() {
    return `This action returns all galleries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gallery`;
  }

  update(id: number, updateGalleryDto: UpdateGalleryDto) {
    return `This action updates a #${id} gallery`;
  }

  remove(id: number) {
    return `This action removes a #${id} gallery`;
  }
}
