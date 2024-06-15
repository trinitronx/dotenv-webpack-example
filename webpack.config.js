var path = require('path')
var webpack = require('webpack')
var Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  plugins: [
    // new webpack.NoEmitOnErrorsPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, './src/.env.testing')
    }),
    new webpack.DefinePlugin({
      'process.env.SUPERTEST': JSON.stringify('This is a test')
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
}
