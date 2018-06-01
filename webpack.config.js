const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: ['babel-polyfill', './src/index.js']
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.hbs$/, use: 'handlebars-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      components: path.resolve('./src/components'),
      views: path.resolve('./src/views')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
