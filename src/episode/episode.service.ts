import { Injectable, NotFoundException } from '@nestjs/common';
import { Episode } from './entities/episode.entities';
import { CreateEpisodeDto } from './dtos/create-episode-dto';

@Injectable()
export class EpisodeService {
    private episodes: Episode[] = [];

    getAll(): Episode[]{
        return this.episodes;
    }

    getOne(id:string): Episode{
        const episode = this.episodes.find(episode => episode.id === +id);
        if (!episode) {
            throw new NotFoundException(`Episode with ID ${id} not found.`);
        }
        return episode;
    }

    create(episodes,episode){
        episodes.push({
            id:this.episodes.length + 1,
            episode
        })
    }

    deleteOne(id:string):boolean {
        this.episodes.filter(episode => episode.id !== +id)
        return true;
    }

    updateEpisode(id:string, updateData) {
        const episode = this.getOne(id);
        this.deleteOne(id);
        this.episodes.push({...episode, ...updateData});
    }
}
