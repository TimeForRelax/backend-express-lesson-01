import { Request, Response } from 'express';
import { db } from '../../db/db';
import { validateBody } from '../../validator/validateBody';

export const updateVideosController = (
  req: Request,
  res: Response<{ message: 'Video not found' } | { errorsMessages: { message: string; field: string }[] }>,
) => {
  const videos = db.videos;

  const id = req.params.id;
  const body = req.body;

  const targetVideo = videos.find((video) => video.id === +id);

  if (!targetVideo) {
    return res.status(404).json({ message: 'Video not found' });
  }

  const errors = validateBody(body);

  if (errors.length > 0) {
    return res.status(400).json({ errorsMessages: errors });
  }

  const updatedVideo = {
    ...targetVideo,
    title: body.title,
    author: body.author,
    availableResolutions: body.availableResolutions,
    canBeDownloaded: body.canBeDownloaded || targetVideo.canBeDownloaded,
    minAgeRestriction: body.minAgeRestriction || targetVideo.minAgeRestriction,
    publicationDate: body.publicationDate || targetVideo.publicationDate,
  };

  const videoIndex = videos.findIndex((video) => video.id === +id);
  if (videoIndex !== -1) {
    videos[videoIndex] = updatedVideo;
  }

  return res.sendStatus(204);
};
