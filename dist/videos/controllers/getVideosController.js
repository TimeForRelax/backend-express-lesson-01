"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideosController = void 0;
const db_1 = require("../../db/db");
const getVideosController = (req, res) => {
    const videos = db_1.db.videos;
    const id = req.params.id;
    if (id) {
        const video = videos.find((video) => video.id === parseInt(id));
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }
        return res.status(200).json(video);
    }
    return res.status(200).json(videos);
};
exports.getVideosController = getVideosController;
