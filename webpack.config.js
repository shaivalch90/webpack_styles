var path = require('path');

module.exports = {
    context: path.resolve('src/js'),
    entry: ['./app'],
    output: {
        path: path.resolve('build/dist'),
        publicPath: '/assets/',
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".es6", ".css", ".scss"]
    },
    devServer: {
        contentBase: path.resolve('public')
    }
}