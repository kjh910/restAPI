import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcasts.entities';
// import { EpisodeService } from 'src/episode/episode.service';
import { CreatePodcastDto } from './dto/create-podcast-dto';
import { UpdatePodcastDto } from './dto/update-podcast-dto';
import { validate } from 'class-validator';
import { CreateEpisodeDto } from 'src/episode/dtos/create-episode-dto';

@Controller('podcasts')
export class PodcastsController {

    constructor( 
        private readonly podcastsService: PodcastsService,
        // private readonly episodeService: EpisodeService
    ) {}

    @Get('/podcasts')
    getAllByGet(): Podcast[]{
        return this.podcastsService.getAll();
    }

    @Post('/podcasts')
    createPodcast(@Body() podcastData:CreatePodcastDto){
        this.podcastsService.create(podcastData);
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

    @Get('/podcasts/:id/episodes')
    getEpisodeByPodcastId(@Param('id') podcastId: string){
        const episodes = this.podcastsService.getOne(podcastId)['episode'];
        return episodes;
    }

    @Post('/podcasts/:id/episodes')
    createEpisode(@Param('id') podcastId: string, @Body() episodeData:CreateEpisodeDto){
        this.podcastsService.createEpisode(podcastId,episodeData);
        return true;
    }


    @Patch('/podcasts/:id/episodes/:episodeId')
    updateEpisode(@Param('id') podcastId: string, @Param('episodeId') episodeId: string, @Body() updateData){
        // const podcast = this.podcastsService.getOne(podcastId);
        // podcast
        // console.log(episodeId);
        
        // if(podcast){
        //     this.episodeService.updateEpisode(episodeId, updateData);
        //     const episodes = this.episodeService.getAll();
        //     console.log(episodes);
        //     this.podcastsService.getAll()['episode'] = episodes;
        //     return episodes;
        // }
        this.podcastsService.updateEpisode(podcastId, episodeId, updateData);
        return true;
    }

    @Delete('/podcasts/:id/episodes/:episodeId')
    deleteEpisodeById(@Param('id') podcastId: string, @Param('episodeId') episodeId: string){
        // const podcast = this.podcastsService.getOne(podcastId);

        // if(podcast){
        //    return this.episodeService.deleteOne(episodeId); 
        // }
        this.podcastsService.deleteOneEpisode(podcastId,episodeId); 
    }
}
