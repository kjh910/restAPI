import { Episode } from './entities/episode.entities';
export declare class EpisodeService {
    private episodes;
    getAll(): Episode[];
    getOne(id: string): Episode;
    create(episodes: any, episode: any): void;
    deleteOne(id: string): boolean;
    updateEpisode(id: string, updateData: any): void;
}
