'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mongoose = {
  enabled: true,
  package: "egg-mongoose"
}

exports.cors = {
  enabled: true,
  package: "egg-cors"
}