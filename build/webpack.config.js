var vue = require('vue-loader');
module.exports = {
  module: {
        loaders: [{
            test: /\.vue$/,
            loader: vue.withLoaders({
                js: 'babel?optional[]=runtime'
            })
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
  }
}
