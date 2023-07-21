import { Artist, Gallery, Piece } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class PieceEntity implements Piece {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    artistId: number;

    @ApiProperty()
    galleryId: number;
}
