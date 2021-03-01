'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg11';
  }
  async getList(){
    const { ctx } = this;
    const list = ["sf",'ta','ts','am']
    ctx.body = list
  }
}

module.exports = HomeController;
