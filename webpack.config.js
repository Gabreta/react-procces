//Dependencias
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpack({
  template: './client/index.html',
  filename: 'index.html',
  inyect: 'body'
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
	{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
	{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
	{ test: /\.scss$/, loader: 'sass-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
