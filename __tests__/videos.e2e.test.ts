import { setDB } from '../src/db/db';
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
    expect(response.error.message).toBe('Video not found');
  });
});
