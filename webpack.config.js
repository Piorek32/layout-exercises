var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const Webpack = require("webpack");
const Autoprefixer = require("autoprefixer");

const isProd = process.env.NODE_ENV === 'production'; //true or false
const cssDev = ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
const cssProd = ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: ['css-loader', 'postcss-loader', 'sass-loader'],
    publicPath: '/dist'
});



module.exports = {
    entry: {
        app: './src/app.js',
        about: './src/about.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.scss$/,
                use: cssDev
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: './images',
                            name: "[name].[ext]",
                        },
                    },
                ]
            }
            
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home',
           
            hash: true,
            excludeChunks: ['about'],

            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'About',
           
            chunks: ['about'],
            hash: true,
            filename: 'about.html',
            template: './src/about.html'
        }),
        new ExtractTextPlugin({
            filename: '/css/[name].css',
            disable: true,
            allChunks: true

        }),
        new Webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    Autoprefixer()]
            }
        })
    ]
}