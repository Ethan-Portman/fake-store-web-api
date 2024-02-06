// Customer.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize-config.js';

class Customer extends Model {
  static associate(models) {
    // define association here
  }
}

Customer.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Customer',
  }
);

export default Customer;