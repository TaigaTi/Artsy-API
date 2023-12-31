import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArtistEntity } from './entities/artist.entity';

@Controller('artists')
@ApiTags('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  @ApiCreatedResponse({type:ArtistEntity})
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  @ApiOkResponse({type: ArtistEntity, isArray: true})
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: ArtistEntity})
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.artistsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: ArtistEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateArtistDto: UpdateArtistDto) {
    return this.artistsService.update(id, updateArtistDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: ArtistEntity})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.artistsService.remove(id);
  }
}
