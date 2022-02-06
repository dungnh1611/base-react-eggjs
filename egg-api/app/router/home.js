'use strict';

/**
 * @param {string} prefix - router prefix
 * @param {Egg.Application} app - egg application
 */
module.exports = (prefix, app) => {
  const { router, controller } = app;
  router.get(prefix + '/', controller.home.index);
};
