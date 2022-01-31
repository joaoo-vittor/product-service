import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        price: {
          type: Sequelize.FLOAT,
          defaultValue: 0,
          allowNull: false,
          validate: {
            min: {
              args: [0],
              msg: 'O preço deve ser um numero positivo.',
            },
          },
        },
        discription: {
          type: Sequelize.TEXT,
          allowNull: true,
          defaultValue: '',
        },
        amount: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false,
          validate: {
            isInt: {
              msg: 'Quantidade deve ser um numero inteiro',
            },
            min: {
              args: [0],
              msg: 'Quantidade deve ser um numero positivo.',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(model) {
    this.hasMany(model.Image, { foreignKey: 'product_id' });
  }
}
