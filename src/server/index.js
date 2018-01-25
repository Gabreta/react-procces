// Dependencies
import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

//webpack Configuration
import webpackConfig from '../../webpack.config';

// Express App
const app = express();
const compiler = webpack(webpackConfig);
const port = process.env.NODE_PORT || 3000;

//Public Static
app.use(express.static(path.join(__dirname, '../../public')));

//Hot Module Replacement
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

//Activar Servidor
app.listen(port, err => {
  if (!err) {
    open(`http://localhost:${port}`);
  }
});
