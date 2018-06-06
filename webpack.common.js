const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          options: {
            helperDirs: path.join(__dirname, 'src/helpers'),
            precompileOptions: {
              knownHelpersOnly: false
            }
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve('./src/components'),
      views: path.resolve('./src/views')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
