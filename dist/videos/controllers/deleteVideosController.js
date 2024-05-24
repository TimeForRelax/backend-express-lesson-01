"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideosController = void 0;
const db_1 = require("../../db/db");
const deleteVideosController = (req, res) => {
    const videos = db_1.db.videos;
    const id = req.params.id;
    const videoIndex = videos.findIndex((video) => video.id === parseInt(id));
    if (videoIndex === -1) {
        return res.status(404).send('Video not found');
    }
    videos.splice(videoIndex, 1);
    return res.status(204).send('Video deleted');
};
exports.deleteVideosController = deleteVideosController;
