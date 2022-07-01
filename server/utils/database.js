import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('culturetech', 'root', '123456', {
  dialect: 'mysql',
  host: '127.0.0.1',
});

export default sequelize;
