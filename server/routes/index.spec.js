import request from 'supertest';

import { app } from '../app';

describe('Root route', () => {
  it('Renders homepage', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
