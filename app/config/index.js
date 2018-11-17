const fs = require('fs');
const path = require('path');

let devConfig = {};

if (fs.existsSync(path.resolve(__dirname, './config.dev.js'))) {
  devConfig = require('./config.dev'); // eslint-disable-line
}

module.exports = {
  APP_PORT: devConfig.APP_PORT || process.env.PORT || 8080,
};
