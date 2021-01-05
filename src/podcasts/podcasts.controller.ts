import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcasts.entities';
import { EpisodeService } from 'src/episode/episode.service';
import { CreatePodcastDto } from './dto/create-podcast-dto';
import { UpdatePodcastDto } from './dto/update-podcast-dto';
import { validate } from 'class-validator';
import { CreateEpisodeDto } from 'src/episode/dtos/create-episode-dto';

@Controller('podcasts')
export class PodcastsController {

    constructor( 
        private readonly podcastsService: PodcastsService,
        private readonly episodeService: EpisodeService
    ) {}

    @Get('/podcasts')
    getAllByGet(): Podcast[]{
        return this.podcastsService.getAll();
    }

    @Post('/podcasts')
    createPodcast(@Body() podcastData:CreatePodcastDto){
        this.podcastsService.create(podcastData);
        // this.episodeService.create(podcastData['episode'],podcastData['episode']['episode']); 
    }

    @Get('/podcasts/:id')
    getById(@Param('id') podcastId: string){
        return this.podcastsService.getOne(podcastId);
    }

    @Patch('/podcasts/:id')
    updateById(@Param('id') podcastId: string, @Body() updateData:UpdatePodcastDto){
        return this.podcastsService.updatePodcast(podcastId, updateData);
    }

    @Delete('/podcasts/:id')
    deleteById(@Param('id') podcastId: string){
        this.podcastsService.deleteOne(podcastId); 
    }
}
