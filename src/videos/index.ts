import { Router } from 'express';
import { getVideosController } from './controllers/getVideosController';
import { createVideosController } from './controllers/createVideosController';
import { deleteVideosController } from './controllers/deleteVideosController';
import { updateVideosController } from './controllers/updateVideosController';

export const videosRouter = Router();

videosRouter.get('/', getVideosController);
videosRouter.get('/:id', getVideosController);
videosRouter.post('/', createVideosController);
videosRouter.delete('/:id', deleteVideosController);
videosRouter.put('/:id', updateVideosController);
