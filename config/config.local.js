'use strict';
module.exports = app => {
  const exports = {};
  exports.cluster = {
    listen: {
      port: 8000,
      hostname: '192.168.8.119',
    },
  };
  return exports;
};