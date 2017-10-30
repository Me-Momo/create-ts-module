// help: http://webpack.github.io/docs/configuration.html
// help: https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');
// const getFiles = require('./utils/getAllFiles');

const config = {
  target: 'web', // help: https://webpack.github.io/docs/configuration.html#target
  entry: [
    path.resolve(__dirname, 'src/index.ts')
  ],
  output: {
    path: path.resolve(__dirname, 'debug-dev-on-browser'),
    filename: 'dev-browser.js'
  },
  // 设置外部引入库名
  externals: [],
  resolve: {
    alias: {},
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    loaders: loaders
  },
  node: {
    // universal app? place here your conditional imports for node env
    fs: "empty",
    path: "empty",
    child_process: "empty",
  },
  plugins: plugins,
};

// function  genEntry() {
//   const entryFiles = getFiles('src', /src\/[\w-]+\.ts$/);
//   let entry = {};
//   entryFiles.map(file => {
//     entry = Object.assign(entry, {
//       [file]: path.resolve(__dirname, `src/${file}.ts`)
//     });
//   });
//   return entry;
// }

module.exports = config;
