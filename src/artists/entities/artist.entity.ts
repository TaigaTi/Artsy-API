import { Artist, Gallery, Piece } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class ArtistEntity implements Artist {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false, nullable: true })
    description: string | null;

    @ApiProperty()
    email: string;
}
