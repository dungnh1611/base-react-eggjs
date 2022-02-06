'use strict';

/**
 * @param {string} prefix - router prefix
 * @param {Egg.Application} app - egg application
 */
module.exports = (prefix, app) => {
  const { router, controller, middleware } = app;
  const jwtAdmin = middleware.jwtAdmin();
  router.get(prefix + '/', controller.user.index);
  router.post(prefix + '/', jwtAdmin, controller.user.create);
  router.get(prefix + '/:id', controller.user.show);
  router.put(prefix + '/:id', app.jwt, controller.user.update);
  router.delete(prefix + '/:id', jwtAdmin, controller.user.destroy);
};
