"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const videosType_1 = require("../types/videosType");
exports.db = {
    videos: [
        {
            id: 0,
            title: 'string',
            author: 'string',
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: '2024-05-21T15:54:49.114Z',
            publicationDate: '2024-05-21T15:54:49.114Z',
            availableResolutions: [videosType_1.Resolutions.P144],
        },
    ],
};