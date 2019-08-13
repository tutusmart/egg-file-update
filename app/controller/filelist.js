'use strict';
const BaseController = require('./base');

class FilelistController extends BaseController {
  async index() {
    const { ctx } = this;
    let idoc = await ctx.model.Imglist.find();
    this.success(idoc);
  }
  async videolist() {
    const { ctx } = this;
    let vdoc = await ctx.model.Videolist.find();
    this.success(vdoc);
  }
}

module.exports = FilelistController;
