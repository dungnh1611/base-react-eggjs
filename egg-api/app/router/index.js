'use strict';
const homeRouter = require('./home');
const userRouter = require('./user');
const authRouter = require('./auth');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const baseApi = '/api';
  router.get('/', controller.home.index);
  authRouter(baseApi + '', app);
  homeRouter(baseApi + '/home', app);
  userRouter(baseApi + '/user', app);
};
