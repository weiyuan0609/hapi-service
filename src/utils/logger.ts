import bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'hapi-service'
});

export = logger;
