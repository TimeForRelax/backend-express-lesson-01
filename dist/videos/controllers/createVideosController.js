"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideosController = void 0;
const db_1 = require("../../db/db");
const validateBody_1 = require("../../validator/validateBody");
const createVideosController = (req, res) => {
    const videos = db_1.db.videos;
    const body = req.body;
    const errors = (0, validateBody_1.validateBody)(body);
    if (errors.length > 0) {
        return res.status(400).json({ errorsMessages: errors });
    }
    const newVideo = {
        id: parseInt(body.id) || +new Date(),
        title: body.title,
        author: body.author,
        canBeDownloaded: body.canBeDownloaded || false,
        minAgeRestriction: body.minAgeRestriction || null,
        createdAt: new Date().toISOString(),
        publicationDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
        availableResolutions: body.availableResolutions || null,
    };
    videos.push(newVideo);
    return res.status(201).json(newVideo);
};
exports.createVideosController = createVideosController;
