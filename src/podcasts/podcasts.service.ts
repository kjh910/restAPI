import { Injectable, NotFoundException } from '@nestjs/common';
import { Podcast } from './entities/podcasts.entities';
import { Episode } from 'src/episode/entities/episode.entities';

@Injectable()
export class PodcastsService {
    private podcasts: Podcast[] = [];
    private episodes: Episode[] = [];

    getAll(): Podcast[] {
        return this.podcasts;
    }

    getOne(id:string):Podcast {
        const podcast = this.podcasts.find(podcast => podcast.id === +id);
        if (!podcast) {
            throw new NotFoundException(`Podcast with ID ${id} not found.`);
        }
        return podcast;
    }

    create(podcastData) {
        this.podcasts.push({
            id: this.podcasts.length + 1,
            ...podcastData
        });
    }

    deleteOne(id:string):boolean {
        this.getOne(id);
        this.podcasts = this.podcasts.filter(podcast => podcast.id !== +id)
        return true;
    }

    updatePodcast(id:string, updateData) {
        const podcast = this.getOne(id);
        this.deleteOne(id);
        this.podcasts.push({...podcast, ...updateData});
    }

    getAllEpisode(): Episode[]{
        return this.episodes;
    }

    getOneEpisode(id:string): Episode{
        const episode = this.episodes.find(episode => episode.id === +id);
        if (!episode) {
            throw new NotFoundException(`Episode with ID ${id} not found.`);
        }
        return episode;
    }

    createEpisode(id,episode){
        const podcast = this.getOne(id);
        const episodes = podcast['episode'];
        episodes.push({
            id:episodes.length + 1,
            ...episode
        });

        // this.updatePodcast(id, episodes);
    }

    deleteOneEpisode(podcastId: string,episodeId:string):boolean {
        const podcast = this.getOne(podcastId);
        let episodes = podcast['episode'];
        for (const key in episodes) {
            if (episodes.hasOwnProperty(key)) {
                const element = episodes[key]['id'];
                // console.log(element);
                episodes = episodes.filter(episode => episode['id'] !== +episodeId);
                if(episodes.length !==0){
                   console.log(episodes);
                }
            }
        }
        // episodes = episodes.filter(episode => episode['id'] !== +episodeId);
        // let episode = this.podcasts.filter(podcast => podcast.episodes.filter(episode => episode.id !== +episodeId));
        // console.log(episodes);
        return true;
    }

    updateEpisode(podcastId: string,episodeId:string, updateData) {
        const podcast = this.getOne(podcastId);
        const episodes = podcast['episode'];
        this.deleteOneEpisode(podcastId,episodeId);
        episodes.push({...episodes, ...updateData});
        console.log(episodes);
    }
}
