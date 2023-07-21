import { ApiProperty } from "@nestjs/swagger";
import { Piece } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateArtistDto {
    @ApiProperty()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ required: false, nullable: true })
    description: string | null;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    piece: Piece[];
}
