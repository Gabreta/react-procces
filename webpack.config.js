// Webpack Configuration (Client & Server)
import clientConfig from './webpack/webpack.config.client';
import serverConfig from './webpack/webpack.config.server';

export default [
  clientConfig,
  serverConfig
];

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './client/index.html',
//   filename: 'index.html',
//   inyect: 'body'
// });
//
// module.exports = {
//   entry: './client/index.js',
//   output: {
//     path: path.resolve('dist'),
//     filename: 'index_bundle.js'
//   },
//   module: {
//     loaders: [
//     	{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//     	{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
//       {
//         test: /\.scss$/,
//         loaders: ["style-loader", "css-loader", "sass-loader"]
//       }
//     ]
//   },
//   plugins: [HtmlWebpackPluginConfig]
// };
