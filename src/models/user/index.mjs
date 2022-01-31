/* eslint-disable import/extensions */
import Sequelize, { Model } from 'sequelize';
import databaseConfig from '../../config/databaseConsumer.mjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        user_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
          unique: {
            msg: '',
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: true,
          unique: {
            msg: '',
          },
        },
        password: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        active: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(model) {
    this.hasMany(model.Product, { foreignKey: 'user_id' });
  }
}

const connection = new Sequelize(databaseConfig);
User.init(connection);
