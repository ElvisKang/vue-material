var vue = require('vue-loader')
var webpack = require('webpack')

module.exports = {
    entry: './src/entry',
    output: {
        path: './static',
        publicPath:"/vue-material/static/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: vue.withLoaders({
                // apply babel transform to all javascript
                // inside *.vue files.
                js: 'babel?optional[]=runtime'
            })
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, 
        { test: "\.(png|jpg)$", loader: "url-loader?limit=8192" }
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
    ],
    devtool: "source-map"
}
