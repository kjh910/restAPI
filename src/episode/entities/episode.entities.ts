import { IsString, IsNotEmpty, IsNumber } from "class-validator"

export class Episode {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    episode: string;
}