import config = require('config');
import fs = require('fs');
import Hapi = require('hapi');
import hapiSwagger = require('hapi-swagger');
import Inert = require('inert');
import path = require('path');
import Vision = require('vision');
import appPlugin = require('./plugins/app');
import routes = require('./routes');
import logger = require('./utils/logger');

const pack = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'));
const server = new Hapi.Server({ port: config.get('PORT') });

const swaggerConfig = {
  plugin: hapiSwagger,
  options: {
    info: {
      title: `${pack.name} API Documentation`,
      version: pack.version
    }
  }
};

const appConfig = {
  plugin: appPlugin
};

(async () => {
  try {
    await server.register(Inert);
    await server.register(Vision);
    await server.register(swaggerConfig);
    await server.start();
    logger.info(`Server running at: ${server.info.uri}`);
  } catch (err) {
    logger.error('启动出错', { err });
    process.exit(1);
  }
})();

server.route(routes);

module.exports = server;
