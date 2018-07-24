'use strict';

const mock = require('egg-mock');

describe('test/framework.test.js', () => {
  describe('framework', () => {
    let app;
    before(() => {
      app = mock.app({
        baseDir: 'apps/framework',
        framework: true,
      });
      return app.ready();
    });

    after(() => app.close());

    afterEach(mock.restore);

    it('should GET /', () => {
      return app.httpRequest()
        .get('/')
        .expect('ok')
        .expect(200);
    });
  });
});

