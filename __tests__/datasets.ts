import { Resolutions, VideosDataType } from '../src/types/videosType';

export const testVideos: VideosDataType[] = [
  {
    id: 0,
    title: 'string',
    author: 'string',
    canBeDownloaded: true,
    minAgeRestriction: null,
    createdAt: '2024-05-21T15:54:49.114Z',
    publicationDate: '2024-05-21T15:54:49.114Z',
    availableResolutions: [Resolutions.P144],
  },
];

export const dataSet = {
  videos: testVideos,
};
