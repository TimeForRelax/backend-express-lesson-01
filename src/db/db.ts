import { Resolutions, VideosDataType } from '../types/videosType';

export const db: Record<'videos', VideosDataType[]> = {
  videos: [
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
  ],
};

export const clearDB = () => {
  db.videos = [];
};

export const setDB = (data: VideosDataType[]) => {
  db.videos = data;
};
