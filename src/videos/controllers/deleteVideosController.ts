import { Request, Response } from 'express';
import { db } from '../../db/db';

export const deleteVideosController = (req: Request, res: Response) => {
  const videos = db.videos;
  const id = req.params.id;

  const videoIndex = videos.findIndex((video) => video.id === parseInt(id));

  if (videoIndex === -1) {
    return res.status(404).json({ message: 'Video not found' });
  }

  videos.splice(videoIndex, 1);

  return res.sendStatus(204);
};
