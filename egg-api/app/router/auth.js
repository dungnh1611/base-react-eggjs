'use strict';

/**
 * @param {string} prefix - router prefix
 * @param {Egg.Application} app - egg application
 */
module.exports = (prefix, app) => {
  const { router, controller } = app;
  router.post(prefix + '/login', controller.auth.login);
  router.get(prefix + '/current', app.jwt, controller.auth.current);
};
