"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeController = void 0;
const common_1 = require("@nestjs/common");
const episode_service_1 = require("./episode.service");
const podcasts_service_1 = require("../podcasts/podcasts.service");
const create_episode_dto_1 = require("./dtos/create-episode-dto");
const update_episode_dto_1 = require("./dtos/update-episode-dto");
let EpisodeController = class EpisodeController {
    constructor(episodeService, podcastsService) {
        this.episodeService = episodeService;
        this.podcastsService = podcastsService;
    }
    getByPodcastId(podcastId) {
        const episodes = this.podcastsService.getOne(podcastId)['episode'];
        return episodes;
    }
    createEpisode(podcastId, episodeData) {
        const episodes = this.podcastsService.getOne(podcastId)['episode'];
        const test = [];
        test.push(episodes);
        test.push({
            id: episodeData.id,
            episode: episodeData.episode
        });
        this.podcastsService.updatePodcast(podcastId, test);
        return true;
    }
    updateEpisode(podcastId, episodeId, updateData) {
        const podcast = this.podcastsService.getOne(podcastId);
        console.log(episodeId);
        if (podcast) {
            this.episodeService.updateEpisode(episodeId, updateData);
            const episodes = this.episodeService.getAll();
            console.log(episodes);
            this.podcastsService.getAll()['episode'] = episodes;
            return episodes;
        }
    }
    deleteById(podcastId, episodeId) {
        const podcast = this.podcastsService.getOne(podcastId);
        if (podcast) {
            return this.episodeService.deleteOne(episodeId);
        }
    }
};
__decorate([
    common_1.Get('/podcasts/:id/episodes'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EpisodeController.prototype, "getByPodcastId", null);
__decorate([
    common_1.Post('/podcasts/:id/episodes'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_episode_dto_1.CreateEpisodeDto]),
    __metadata("design:returntype", void 0)
], EpisodeController.prototype, "createEpisode", null);
__decorate([
    common_1.Patch('/podcasts/:id/episodes/:episodeId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('episodeId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_episode_dto_1.UpdateEpisodeDto]),
    __metadata("design:returntype", void 0)
], EpisodeController.prototype, "updateEpisode", null);
__decorate([
    common_1.Delete('/podcasts/:id/episodes/:episodeId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('episodeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EpisodeController.prototype, "deleteById", null);
EpisodeController = __decorate([
    common_1.Controller('podcasts'),
    __metadata("design:paramtypes", [episode_service_1.EpisodeService,
        podcasts_service_1.PodcastsService])
], EpisodeController);
exports.EpisodeController = EpisodeController;
//# sourceMappingURL=episode.controller.js.map