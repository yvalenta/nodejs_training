import request from 'supertest';
import server from '../server.js';

describe('Given a nodeJS server', () => {
  afterAll((done) => {
    // close server after test
    server.close(done);
  });

  describe('When I make a GET request to /', () => {
    it('Then I expect to get a 200 status code and Hello World', async () => {
      const response = await request(server).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Hello World\n');
    });
  });

  describe('When I make a GET request to /health', () => {
    it('Then I expect to get health check information', async () => {
      const response = await request(server).get('/health');
      expect(response.statusCode).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body).toMatchObject({
        status: 'ok',
        message: 'Server is running',
        uptime: expect.any(Number),
        version: expect.any(String),
        platform: expect.any(String),
        memoryUsage: expect.any(Object),
        cpuUsage: expect.any(Object)
      });
    });
  });

  describe('When I make a GET request to a non-existent route', () => {
    it('Then I expect to get a 404 status code', async () => {
      const response = await request(server).get('/not-found');
      expect(response.statusCode).toBe(404);
      expect(response.text).toBe('Not Found\n');
    });
  });
});