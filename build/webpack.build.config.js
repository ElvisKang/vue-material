var vue = require('vue-loader')
var webpack = require('webpack')

module.exports = {
  entry: './src/entry.js',
  output: {
    path: './dist',
    filename: 'vue-material.min.js',
    library: 'vue-material',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
     {
        test: /\.vue$/,
        loader: vue.withLoaders({
          // apply babel transform to all javascript
          // inside *.vue files.
          js: 'babel?optional[]=runtime'
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
    ]
  },
    devtool: 'source-map'
}
