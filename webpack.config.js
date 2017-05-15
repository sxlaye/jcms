var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },  
    module: {
        loaders: [{
                test: /\.js|.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:
                {
                  "presets": ["react"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/,
            },
             {
                test: /\.(png|jpg|gif|svg)$/i,
                loader: 'file-loader',
                exclude: /node_modules/,
            }
        ]
    }


};