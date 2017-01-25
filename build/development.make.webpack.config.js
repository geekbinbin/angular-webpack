'use strict';

const rucksack = require('rucksack-css');
const Webpack = require('webpack');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

function makeWebpackConfig() {
    return {
        context: path.join(__dirname, '../client'),
        entry: {
            js: './index.js',
            html: './index.html',
            vendor: [
                'angular',
                'angular-ui-bootstrap',
                'angular-ui-router',
                'angular-animate'
            ]
        },
        output: {
            path: path.resolve(__dirname, 'Release'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: 'file?name=[path][name].[ext]'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.(less|css)$/,
                    include: /client|node_modules/,
                    loader: extractTextPlugin.extract('style', 'css-loader!postcss-loader!less-loader')
                },
                {
                    test: /\.(eot|woff|woff2|svg|ttf)$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(png|gif|jpg)$/,
                    loader: 'file-loader'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js']
        },
        postcss: [
            rucksack({
                autoprefixer: true
            })
        ],
        plugins: [
            new Webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
            new Webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
                }
            }),
            new ngAnnotatePlugin({
                add: true
            }),
            new extractTextPlugin('app.css', {
                allChunks: true
            })
        ],
        devtool: 'source-map',
        devServer: {
            contentBase: './client',
            hot: true,
            proxy: {
              '/': {
                target: 'http://localhost:9000'
              }
            }
        }
    };
}

module.exports = makeWebpackConfig;
