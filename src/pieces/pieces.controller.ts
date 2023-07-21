import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PiecesService } from './pieces.service';
import { CreatePieceDto } from './dto/create-piece.dto';
import { UpdatePieceDto } from './dto/update-piece.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PieceEntity } from './entities/piece.entity';

@Controller('pieces')
@ApiTags('pieces')
export class PiecesController {
  constructor(private readonly piecesService: PiecesService) {}

  @Post()
  @ApiCreatedResponse({type: PieceEntity})
  create(@Body() createPieceDto: CreatePieceDto) {
    return this.piecesService.create(createPieceDto);
  }

  @Get()
  @ApiOkResponse({type:PieceEntity, isArray: true})
  findAll() {
    return this.piecesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: PieceEntity})
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.piecesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: PieceEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePieceDto: UpdatePieceDto) {
    return this.piecesService.update(id, updatePieceDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: PieceEntity})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.piecesService.remove(id);
  }
}
