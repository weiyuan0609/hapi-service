const Lab = require('lab');
const server = require('../src/app');

const lab = Lab.script();

exports.lab = lab;

const { describe, it } = lab;
const { expect } = require('code');

describe('/test', () => {
  it('GET /get', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/get/123456'
    });
    expect(response.statusCode).to.equal(200);
    expect(response.result).to.equal('123456');
  });

  it('GET /get/v2', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/get/v2/123456'
    });
    expect(response.statusCode).to.equal(200);
    expect(response.result).to.equal('123456');
  });

  it('POST /post', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/post/123456'
    });
    expect(response.statusCode).to.equal(200);
  });
});
