/* eslint-disable import/extensions */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import productModel from '../models/product';
import imageModel from '../models/image';

const models = [productModel, imageModel];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
