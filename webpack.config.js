var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
  __DEVELOPMENT__: JSON.stringify(JSON.parse(process.env.BUILD_DEVELOPMENT || false)),
  __PRODUCTION__: JSON.stringify(JSON.parse(process.env.BUILD_PRODUCTION || false))
});

var siteConfig = {
  entry: {
    index: [
      './source/stylesheets/index.css',
      './source/javascripts/index.js'
    ]
  },

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          // cacheDirectory: true,
          // presets: ['es2015', 'stage-0', 'babel-preset-react', 'react']
          presets: ['es2015', 'stage-0']
        },
      },

      { test: require.resolve("jquery"), loader: "expose?$" },

      {
        test: /[\\\/]vendor[\\\/]modernizr\.js$/,
        loader: "imports?this=>window!exports?window.Modernizr"
      },

      // Load plain-ol' vanilla CSS
      { 
          test: /\.css$/, 
          loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
    ],
  },

  node: {
    console: true
  },

  plugins: [
    definePlugin,
    new Clean(['.tmp']),
    new ExtractTextPlugin("stylesheets/index.bundle.css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  ],
};

module.exports = siteConfig;
