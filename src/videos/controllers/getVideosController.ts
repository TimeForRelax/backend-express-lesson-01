import { Request, Response } from 'express';
import { db } from '../../db/db';
import { VideosDataType } from '../../types/videosType';

export const getVideosController = (
  req: Request,
  res: Response<VideosDataType[] | VideosDataType | { message: string }>,
) => {
  const videos = db.videos;

  const id = req.params.id;

  if (id) {
    const video: VideosDataType | undefined = videos.find((video) => video.id === parseInt(id));

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    return res.status(200).json(video);
  }

  return res.status(200).json(videos);
};
