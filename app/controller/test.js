'use strict';

const { Controller } = require('egg');

/**
 * @Controller 测试
 */

class TestController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   ctx.body = 'hi, egg';
  // }
  /**
   * @summary 接口测试
   * @description 测试swagger文档是否可用
   * @router get /api/v1/test
   * @request query string str 随机字符串
   * @response 200 testResponse
   */
  async test() {
    const { ctx } = this;
    const str = ctx.query.str;
    ctx.body = await {
      message: 'swagger is OK!!! and query is:' + str,
    };
  }
}

module.exports = TestController;
