'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //添加图片
  router.post('/update/img', controller.update.index);
  //添加视屏
  router.post('/update/video', controller.update.video);
  //查询图片List
  router.get('/filelist', controller.filelist.index);
  //查询视频List
  router.get('/videolist', controller.filelist.videolist);
};