var vue = require('vue-loader')

module.exports = {
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
  }
}
