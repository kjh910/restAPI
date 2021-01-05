import { Episode } from "src/episode/entities/episode.entities";
export declare class CreatePodcastDto {
    readonly id: number;
    readonly title: string;
    readonly category: string;
    readonly rating: number;
    readonly episode: Episode[];
}
