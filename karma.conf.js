var webpack = require("webpack");
module.exports = function(config) {
  config.set({

    files: [
      // all files ending in "test"
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'build/test.js'
      // each file acts as entry point for the webpack configuration
    ],

    // frameworks to use
    frameworks: ['mocha'],

    preprocessors: {
      // only specify one entry point
      // and require all tests in there
      'build/test.js': ['webpack']
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'output/coverage/'
    },

    webpack: {
      // webpack configuration
      module: {
        loaders: [
          {test: /\.css$/, loader: "style!css"},
          {test: /\.less$/, loader: "style!css!less"}
        ],
        postLoaders: [{
          test: /\.js/,
          exclude: /(node_modules|bower_components)/,
          loader: 'istanbul-instrumenter'
        }]
      },
      resolve: {
        modulesDirectories: [
          "node_modules"
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },

    plugins: [
      require("karma-webpack"),
      require("istanbul-instrumenter-loader"),
      require("karma-mocha"),
      require("karma-coverage"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter")
    ],

    browsers: ['PhantomJS']
  });
};