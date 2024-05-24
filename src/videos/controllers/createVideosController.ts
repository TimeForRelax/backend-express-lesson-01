import { Request, Response } from 'express';
import { db } from '../../db/db';
import { VideosDataType } from '../../types/videosType';
import { validateBody } from '../../validator/validateBody';

export const createVideosController = (
  req: Request,
  res: Response<VideosDataType | { errorsMessages: { message: string; field: string }[] }>,
) => {
  const videos = db.videos;

  const body = req.body;

  const errors = validateBody(body);

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
