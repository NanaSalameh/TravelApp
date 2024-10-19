const request = require('supertest');
const server = require('../src/server/index.js'); 
describe('GET /', () => {
    afterAll((done) => {
        server.close(done); // Ensure the server closes before finishing tests
    });
    it('should respond the index.html file', async () => {
        const response = await request(server).get('/');
        expect(response.headers['content-type']).toBe('text/html; charset=UTF-8');
        expect(response.statusCode).toBe(200);
       
    });
});