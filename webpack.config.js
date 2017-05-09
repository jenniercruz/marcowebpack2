var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: {
        app:[
            './src/js/app.js',
            './src/scss/styles.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, './public/res/js'),
        filename: 'script.js'
    },
    
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                  use: [
                      {
                        loader: 'css-loader',
                        options: { url: false }
                      },
                      'sass-loader'
                  ],
                  fallback: 'style-loader'
                })
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader" 
                
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('../css/styles.min.css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
    
};

/*if(inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}*/

/*

thnks to LARACAST
https://laracasts.com/series/webpack-for-everyone

still pendiente en esta config:
    manejo de rutas
    enviroment
    loaders y plugins para rutas de imágenes
    optimización de imágenes
    caching
    manifest
    clean css
    devServer
    livereload

*/