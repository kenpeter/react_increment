// file path
var path = require("path");

// dist dir
var DIST_DIR = path.resolve(__dirname, "dist");

// src dir
var SRC_DIR = path.resolve(__dirname, "src");


var config = {
  // entry, every thing inside app
  entry: SRC_DIR + "/app/index.js",
  
  // output
  output: {
    // output has similar ./dist/app/bundle.js
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    // ./dist/app/
    publicPath: "/app/"
  },
    
  // module
  module: {
    // multiple loaders
    loaders: [
      {
        // only need .js
        test: /\.js?/,
        // source dir
        include: SRC_DIR,
        // babel 
        loader: "babel-loader",
        // query
        query: {
          // preset
          // react
          // es2015
          // stage-2
          // https://tc39.github.io/process-document/, lower number powerful
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
};

// module exports
// config
module.exports = config;
