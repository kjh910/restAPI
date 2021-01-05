import { Podcast } from './entities/podcasts.entities';
export declare class PodcastsService {
    private podcasts;
    getAll(): Podcast[];
    getOne(id: string): Podcast;
    create(podcastData: any): void;
    deleteOne(id: string): boolean;
    updatePodcast(id: string, updateData: any): void;
}
