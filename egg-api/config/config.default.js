/* eslint-disable array-bracket-spacing */
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
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1644020572662_7780';

  // add your middleware config here
  config.middleware = ['errorHandle'];

  config.mongoose = {
    clients: {
      server: {
        url: 'mongodb+srv://root:root2@cluster0.ckyb3.mongodb.net/eggjs?retryWrites=true&w=majority',
        options: {
          // useMongoClient: true,
          // autoReconnect: true,
          // reconnectTries: Number.MAX_VALUE,
          // bufferMaxEntries: 0,
        }, // mongoose global plugins, expected a function or an array of function and options
      },
    },
  };
  config.jwt = {
    secret: 'DunHaShop',
    enable: true, // default is false
    match: '/jwt', // optional
  };
  config.security = {
    csrf: false,
    // domainWhiteList: ['http://localhost:8000'],
  };
  config.bcrypt = {
    saltRounds: 10, // default 10
  };
  // config.multipart = {
  //   fileExtensions: [
  //     '.apk',
  //     '.pptx',
  //     '.docx',
  //     '.csv',
  //     '.doc',
  //     '.ppt',
  //     '.pdf',
  //     '.pages',
  //     '.wav',
  //     '.mov',
  //   ], // 增加对 .apk 扩展名的支持
  // };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
