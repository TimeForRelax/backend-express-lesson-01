"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideosController = void 0;
const db_1 = require("../../db/db");
const validateBody_1 = require("../../validator/validateBody");
const updateVideosController = (req, res) => {
    const videos = db_1.db.videos;
    const id = req.params.id;
    const body = req.body;
    const targetVideo = videos.find((video) => video.id === +id);
    if (!targetVideo) {
        return res.status(404).send('Video not found');
    }
    const errors = (0, validateBody_1.validateBody)(body);
    if (errors.length > 0) {
        return res.status(400).json({ errorsMessages: errors });
    }
    const updatedVideo = Object.assign(Object.assign({}, targetVideo), { title: body.title, author: body.author, availableResolutions: body.availableResolutions, canBeDownloaded: body.canBeDownloaded || targetVideo.canBeDownloaded, minAgeRestriction: body.minAgeRestriction || targetVideo.minAgeRestriction, publicationDate: body.publicationDate || targetVideo.publicationDate });
    return res.sendStatus(204);
};
exports.updateVideosController = updateVideosController;
