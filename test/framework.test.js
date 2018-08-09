'use strict';

const mock = require('egg-mock');

describe('test/framework.test.js', () => {
  describe('framework', () => {
    let app;
    before(() => {
      app = mock.app({
        baseDir: 'apps/framework',
        framework: true
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

  describe('nunjucks view', () => {
    let app;
    before(() => {
      app = mock.app({
        baseDir: 'apps/view',
        framework: true
      });
      return app.ready();
    });

    after(() => app.close());

    it('should render template', () => {
      return app.httpRequest()
        .get('/')
        .expect(200)
        .expect(/I am walle/);
    });

    it('should render string', () => {
      return app.httpRequest()
        .get('/string')
        .expect(200)
        .expect('Hi, walle');
    });

    it('should helper.sjs work', () => {
      return app.httpRequest()
        .get('/sjs')
        .expect(200)
        .expect('\\x22hello\\x27\\x5c\\x28\\x29\\x3c\\x3e\\x2e');
    });

    it('should helper.shtml work', () => {
      return app.httpRequest()
        .get('/shtml')
        .expect(200)
        .expect('<img><h1>foo</h1>');
    });
  });
});

