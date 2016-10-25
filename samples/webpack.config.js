const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


const REACT_REFORM_SRC = path.join(__dirname, '..', 'src')

module.exports = {

  devtool: 'source-map',

  entry: {
    app: path.join(__dirname, 'index.js')
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: `[name]-[hash].js`,
    pubicPath:  ''
  },

  plugins: [
    new HTMLWebpackPlugin({
      baseHref: '/',
      template: 'index.html.ejs'
    })
  ],

  resolve: {
    alias: {
      'react-reform': REACT_REFORM_SRC
    }
  },

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules|\.examples/,
        loader: 'babel-loader'
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
      assets: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: true
    }
  }
}