'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/string', controller.home.string);
  router.get('/sjs', controller.home.sjs);
  router.get('/shtml', controller.home.shtml);
};
