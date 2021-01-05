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
exports.PodcastsController = void 0;
const common_1 = require("@nestjs/common");
const podcasts_service_1 = require("./podcasts.service");
const episode_service_1 = require("../episode/episode.service");
const create_podcast_dto_1 = require("./dto/create-podcast-dto");
const update_podcast_dto_1 = require("./dto/update-podcast-dto");
const create_episode_dto_1 = require("../episode/dtos/create-episode-dto");
let PodcastsController = class PodcastsController {
    constructor(podcastsService, episodeService) {
        this.podcastsService = podcastsService;
        this.episodeService = episodeService;
    }
    getAllByGet() {
        return this.podcastsService.getAll();
    }
    createPodcast(podcastData) {
        this.podcastsService.create(podcastData);
    }
    getById(podcastId) {
        return this.podcastsService.getOne(podcastId);
    }
    updateById(podcastId, updateData) {
        return this.podcastsService.updatePodcast(podcastId, updateData);
    }
    deleteById(podcastId) {
        this.podcastsService.deleteOne(podcastId);
    }
};
__decorate([
    common_1.Get('/podcasts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PodcastsController.prototype, "getAllByGet", null);
__decorate([
    common_1.Post('/podcasts'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_podcast_dto_1.CreatePodcastDto]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "createPodcast", null);
__decorate([
    common_1.Get('/podcasts/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "getById", null);
__decorate([
    common_1.Patch('/podcasts/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_podcast_dto_1.UpdatePodcastDto]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "updateById", null);
__decorate([
    common_1.Delete('/podcasts/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "deleteById", null);
PodcastsController = __decorate([
    common_1.Controller('podcasts'),
    __metadata("design:paramtypes", [podcasts_service_1.PodcastsService,
        episode_service_1.EpisodeService])
], PodcastsController);
exports.PodcastsController = PodcastsController;
//# sourceMappingURL=podcasts.controller.js.map