'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('index.html', {
      username: 'walle',
    });
  }

  async string() {
    const { ctx } = this;
    ctx.body      = await ctx.renderString('Hi, {{username}}', {
      username: 'walle',
    });
  }

  async sjs() {
    const { ctx } = this;

    await ctx.render('/sjs', {
      foo: '"hello\'\\()<>.',
    });
  }

  async shtml() {
    const { ctx } = this;

    await ctx.render('/shtml', {
      foo: '<img onload="xx"><h1>foo</h1>',
    });
  }

  async surl() {
    const { ctx } = this;

    await ctx.render('/surl.html', {
      url: 'http://ww.safe.com<script>\</script>',
    });
  }
}

module.exports = HomeController;
