"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeService = void 0;
const common_1 = require("@nestjs/common");
let EpisodeService = class EpisodeService {
    constructor() {
        this.episodes = [];
    }
    getAll() {
        return this.episodes;
    }
    getOne(id) {
        const episode = this.episodes.find(episode => episode.id === +id);
        if (!episode) {
            throw new common_1.NotFoundException(`Episode with ID ${id} not found.`);
        }
        return episode;
    }
    create(episodes, episode) {
        episodes.push({
            id: this.episodes.length + 1,
            episode
        });
    }
    deleteOne(id) {
        this.episodes.filter(episode => episode.id !== +id);
        return true;
    }
    updateEpisode(id, updateData) {
        const episode = this.getOne(id);
        this.deleteOne(id);
        this.episodes.push(Object.assign(Object.assign({}, episode), updateData));
    }
};
EpisodeService = __decorate([
    common_1.Injectable()
], EpisodeService);
exports.EpisodeService = EpisodeService;
//# sourceMappingURL=episode.service.js.map