import { IsString, IsNumber, IsNotEmpty} from "class-validator";
import { Episode } from "src/episode/entities/episode.entities";
import { CreateEpisodeDto } from "src/episode/dtos/create-episode-dto";

export class CreatePodcastDto {

    @IsNumber()
    readonly id: number;

    @IsString()
    readonly title: string;

    @IsString()
    readonly category: string;

    @IsNumber()
    readonly rating: number;

    @IsNotEmpty()
    readonly episode: Episode[];

}