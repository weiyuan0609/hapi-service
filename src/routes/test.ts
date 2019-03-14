import Joi = require('joi');
import logger = require('../utils/logger');
import Router = require('../utils/Router');
const router = new Router();

router.get('/get/{id}', {
  description: '测试get',
  tags: ['api'],
  validate: {
    params: {
      id: Joi.string().description('id')
    }
  },
  plugins: {
    'hapi-swagger': {
      responses: {
        200: {
          description: 'Success'
        },
        400: { description: 'Bad Request' }
      }
    }
  },
  handler(req, h) {
    const id = req.params.id;
    logger.info('查询请求成功', id);
    return id;
  }
});

router.get('/get/v2/{id}', {
  description: '测试get',
  tags: ['api'],
  validate: {
    params: {
      id: Joi.string().description('id')
    }
  },
  plugins: {
    'hapi-swagger': {
      responses: {
        200: {
          description: 'Success'
        },
        400: { description: 'Bad Request' }
      }
    }
  },
  handler(req, h) {
    const id = req.params.id;
    logger.info('查询请求v2成功', id);
    return id;
  }
});

router.post('/post/{id}', {
  description: '测试post',
  tags: ['api'],
  validate: {
    params: {
      id: Joi.string().description('id')
    }
  },
  plugins: {
    'hapi-swagger': {
      responses: {
        200: {
          description: 'Success'
        },
        400: { description: 'Bad Request' }
      }
    }
  },
  handler(req, h) {
    const id = req.params.id;
    logger.info('post请求成功', id);
    return id;
  }
});

export = router;
