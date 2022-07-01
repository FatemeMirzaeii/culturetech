import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('culturetech', 'root', '123456', {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;
