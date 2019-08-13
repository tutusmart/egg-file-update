/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564989232786_2471';
  // add your middleware config here
  config.middleware = [];
  config.multipart = {
    fileSize: '50mb',
    mode: 'stream',
    fileExtensions: ['.xls', '.txt','.png','.mp4','.pdf'], // 扩展几种上传的文件格式
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1/example',
    options: {},
  };
  //配合客户端打开withCredentials;
  config.cors = {
    credentials: true
  };

  config.cluster = {
    listen: {
      path: '',
      port: 7002,
      hostname: '0.0.0.0',
    }
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};
