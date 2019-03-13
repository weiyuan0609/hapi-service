import { Lifecycle, Plugin } from 'hapi';
import { IRequest } from '../interfaces/hapi';
import logger = require('../utils/logger');

const plugin: Plugin<any> = {
  name: 'app-context',
  version: '1.0.0',
  register(server) {
    const onRequest: Lifecycle.Method = (req, h) => {
      let accessInfo = { accessId: req.info.id };
      try {
        accessInfo = JSON.parse(req.headers['access-info']);
      } catch (err) {
        // ignore
      }
      const defaultHeaders = {
        'x-forwarded-for': req.headers['x-forwarded-for']
      };
      const app = {
        accessInfo,
        logger: logger.child(accessInfo)
      };
      (req as IRequest).plugins.app = app;
      return h.continue;
    };
    server.ext('onRequest', onRequest);
  }
};

export = plugin;
