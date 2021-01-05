"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodcastsService = void 0;
const common_1 = require("@nestjs/common");
let PodcastsService = class PodcastsService {
    constructor() {
        this.podcasts = [];
    }
    getAll() {
        return this.podcasts;
    }
    getOne(id) {
        const podcast = this.podcasts.find(podcast => podcast.id === +id);
        if (!podcast) {
            throw new common_1.NotFoundException(`Podcast with ID ${id} not found.`);
        }
        return podcast;
    }
    create(podcastData) {
        this.podcasts.push(Object.assign({ id: this.podcasts.length + 1 }, podcastData));
    }
    deleteOne(id) {
        this.getOne(id);
        this.podcasts = this.podcasts.filter(podcast => podcast.id !== +id);
        return true;
    }
    updatePodcast(id, updateData) {
        const podcast = this.getOne(id);
        this.deleteOne(id);
        this.podcasts.push(Object.assign(Object.assign({}, podcast), updateData));
    }
};
PodcastsService = __decorate([
    common_1.Injectable()
], PodcastsService);
exports.PodcastsService = PodcastsService;
//# sourceMappingURL=podcasts.service.js.map