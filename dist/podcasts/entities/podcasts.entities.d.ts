import { Episode } from "src/episode/entities/episode.entities";
export declare class Podcast {
    id: number;
    title: string;
    category: string;
    rating: number;
    episodes: Episode[];
}
