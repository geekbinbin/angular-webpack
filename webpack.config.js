'use strict';

const progressStatus = process.env.NODE_ENV || 'development';

console.log(`The build progress is under ${progressStatus}`);

const webpackConfigPath = `./build/${progressStatus}.make.webpack.config.js`;
const config = require(webpackConfigPath);

module.exports = config();
