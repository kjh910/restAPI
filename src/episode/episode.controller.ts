// import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
// import { EpisodeService } from './episode.service';
// import { PodcastsService } from 'src/podcasts/podcasts.service';
// import { CreateEpisodeDto } from './dtos/create-episode-dto';
// import { UpdateEpisodeDto } from './dtos/update-episode-dto';

// @Controller('podcasts')
// export class EpisodeController {

//     constructor(
//         private readonly episodeService: EpisodeService,
//         private readonly podcastsService: PodcastsService
//     ){}

//     @Get('/podcasts/:id/episodes')
//     getByPodcastId(@Param('id') podcastId: string){
//         const episodes = this.podcastsService.getOne(podcastId)['episode'];
//         return episodes;
//     }

//     @Post('/podcasts/:id/episodes')
//     createEpisode(@Param('id') podcastId: string, @Body() episodeData:CreateEpisodeDto){
//         console.log(episodeData);
//         const episodes = this.podcastsService.getOne(podcastId)['episode'];
//         this.podcastsService.updatePodcast(podcastId,episodeData);
//         return true;
//     }


//     @Patch('/podcasts/:id/episodes/:episodeId')
//     updateEpisode(@Param('id') podcastId: string, @Param('episodeId') episodeId: string, @Body() updateData:UpdateEpisodeDto){
//         const podcast = this.podcastsService.getOne(podcastId);
//         podcast
//         console.log(episodeId);
        
//         if(podcast){
//             this.episodeService.updateEpisode(episodeId, updateData);
//             const episodes = this.episodeService.getAll();
//             console.log(episodes);
//             this.podcastsService.getAll()['episode'] = episodes;
//             return episodes;
//         }
//     }

//     @Delete('/podcasts/:id/episodes/:episodeId')
//     deleteById(@Param('id') podcastId: string, @Param('episodeId') episodeId: string){
//         const podcast = this.podcastsService.getOne(podcastId);

//         if(podcast){
//            return this.episodeService.deleteOne(episodeId); 
//         }
//     }
// }
