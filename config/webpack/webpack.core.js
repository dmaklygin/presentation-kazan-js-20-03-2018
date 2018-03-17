const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    modules: [
      'node_modules',
      path.join(process.cwd(), 'app')
    ]
  },

  cache: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-import'),
                  require('autoprefixer')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-import'),
                  require('autoprefixer')
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(process.cwd(), 'dist', 'index.html'),
      template: path.join(process.cwd(), 'app', 'index.html'),
      minify: {
        collapseWhitespace: false
      },
      hash: true,
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],

  devServer: {
    contentBase: path.join(process.cwd(), "dist"),
    compress: true,
    port: 9000
  }
}