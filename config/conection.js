//Dependencias
import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/passport-ses', {});

export default sequelize;
