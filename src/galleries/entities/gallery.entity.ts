import { Gallery } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class GalleryEntity implements Gallery {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    location: string;
}
