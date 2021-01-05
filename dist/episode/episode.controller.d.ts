import { EpisodeService } from './episode.service';
import { PodcastsService } from 'src/podcasts/podcasts.service';
import { CreateEpisodeDto } from './dtos/create-episode-dto';
import { UpdateEpisodeDto } from './dtos/update-episode-dto';
export declare class EpisodeController {
    private readonly episodeService;
    private readonly podcastsService;
    constructor(episodeService: EpisodeService, podcastsService: PodcastsService);
    getByPodcastId(podcastId: string): any;
    createEpisode(podcastId: string, episodeData: CreateEpisodeDto): boolean;
    updateEpisode(podcastId: string, episodeId: string, updateData: UpdateEpisodeDto): import("./entities/episode.entities").Episode[];
    deleteById(podcastId: string, episodeId: string): boolean;
}
