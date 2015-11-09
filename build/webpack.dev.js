var config = require('./webpack.config.js');
var webpack = require('webpack')

module.exports = {
    entry: './src/vue-material',
    output: {
        path: '../vue-material-page/src',
        filename: 'vue-material.min.js',
        library: 'vue-material',
        libraryTarget: 'umd'
    },
    module:config.module,
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
