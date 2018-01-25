// Dependencies
import express from 'express';
import open from 'open';
import path from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

//Llave secreta de Sesion
import sesion from '../../config/session';

//Sequelize Configuration
import db from '../../api/models';

// Webpack Configuration
import webpackConfig from '../../webpack.config';

// Express app
const app = express();
const compiler = webpack(webpackConfig);
const port = process.env.NODE_PORT || 3000;

// Public static
app.use(express.static(path.join(__dirname, '../../public')));

//Uso de Cookies y manejo de sesion
app.use(cookieParser());
app.use(session(sesion));

//Inicializacion de passport


// Hot Module Replacement
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

//Activando servidor solo si esta integrado con la base de datos
db
  .sequelize
  .sync()
  .then(listenServer).catch((err) => { console.log('Error:', err) });

function listenServer() {
  app.listen(port, err1 => {
    if (!err1) {
      open(`http://localhost:${port}`);
    }
  });
}
