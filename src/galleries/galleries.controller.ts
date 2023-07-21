import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GalleryEntity } from './entities/gallery.entity';

@Controller('galleries')
@ApiTags('galleries')
export class GalleriesController {
  constructor(private readonly galleriesService: GalleriesService) {}

  @Post()
  @ApiCreatedResponse({type: GalleryEntity})
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleriesService.create(createGalleryDto);
  }

  @Get()
  @ApiOkResponse({type: GalleryEntity})
  findAll() {
    return this.galleriesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: GalleryEntity})
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.galleriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: GalleryEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateGalleryDto: UpdateGalleryDto) {
    return this.galleriesService.update(id, updateGalleryDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: GalleryEntity})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.galleriesService.remove(id);
  }
}
