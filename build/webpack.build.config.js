var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'vue-material.min.js',
    library: 'VueMaterial',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
