var config = require('./webpack.config.js');
var webpack = require('webpack')

module.exports = {
    entry: './src/vue-material',
    output: {
        path: '../vue-material-page/src',
        filename: 'vue-material.js',
        library: 'vue-material',
        libraryTarget: 'umd'
    },
    module:config.module,
    babel:{
        cacheDirectory:true,
        presets: ['es2015']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
}