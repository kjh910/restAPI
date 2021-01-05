import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateEpisodeDto {

    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly episode: string;

}