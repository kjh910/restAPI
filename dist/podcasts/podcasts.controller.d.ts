import { PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcasts.entities';
import { EpisodeService } from 'src/episode/episode.service';
import { CreatePodcastDto } from './dto/create-podcast-dto';
import { UpdatePodcastDto } from './dto/update-podcast-dto';
export declare class PodcastsController {
    private readonly podcastsService;
    private readonly episodeService;
    constructor(podcastsService: PodcastsService, episodeService: EpisodeService);
    getAllByGet(): Podcast[];
    createPodcast(podcastData: CreatePodcastDto): void;
    getById(podcastId: string): Podcast;
    updateById(podcastId: string, updateData: UpdatePodcastDto): void;
    deleteById(podcastId: string): void;
}
