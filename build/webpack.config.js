module.exports = {
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:{
          presets:['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
