import { setDB } from '../src/db/db';
import { Resolutions } from '../src/types/videosType';
import { dataSet } from './datasets';
import { req } from './test-helpers';

describe('Videos API', () => {
  beforeAll(() => {
    setDB(dataSet.videos);
  });

  it('should return all videos', async () => {
    const response = await req.get('/videos');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(dataSet.videos.length);
  });

  it('should return video by id', async () => {
    const response = await req.get('/videos/0');

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(0);
  });

  it('should return 404 if video not found', async () => {
    const response: any = await req.get('/videos/100');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Video not found');
  });

  it('should return 404 if video not found', async () => {
    const response: any = await req.delete('/videos/100');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Video not found');
  });

  it('should delete video by id', async () => {
    const response = await req.delete('/videos/0');

    expect(response.status).toBe(204);
  });

  it('should create video', async () => {
    const response = await req.post('/videos').send({
      id: 1,
      title: 'Test title',
      author: 'Test author',
      canBeDownloaded: true,
      minAgeRestriction: 17,
      publicationDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
      availableResolutions: [Resolutions.P1440, Resolutions.P240, Resolutions.P360],
    });

    expect(response.status).toBe(201);
  });

  it('should update video', async () => {
    const response = await req.put('/videos/1').send({
      title: 'New title',
      author: 'New author',
      canBeDownloaded: false,
      minAgeRestriction: 15,
      publicationDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
      availableResolutions: [Resolutions.P240, Resolutions.P360],
    });

    expect(response.status).toBe(204);
  });
});
