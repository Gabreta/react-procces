import fs from 'fs'; //Para el llamamiento Recursivo de todos los modelos y que estos se ajusten a la base de datos
import path from 'path';
import Sequelize from 'sequelize'; // Manejo de la Base de datos posgresql
import lodash from 'lodash'; //Algunas Librerias Extra
import sequelize from '../../config/conection';

var db = {};

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);
