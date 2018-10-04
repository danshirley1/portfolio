import request from 'supertest';

import { app } from '../../app';

describe('Spotify routes', () => {
  it('Renders /authorize', async () => {
    const response = await request(app).get('/spotify/authorize');
    expect(response.statusCode).toBe(200);
  });

  it('Renders /authorize-callback', async () => {
    const response = await request(app).get('/spotify/authorize-callback');
    expect(response.statusCode).toBe(302);
  });
});
