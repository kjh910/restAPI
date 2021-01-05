import { Injectable, NotFoundException } from '@nestjs/common';
import { Podcast } from './entities/podcasts.entities';

@Injectable()
export class PodcastsService {
    private podcasts: Podcast[] = [];

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
}
