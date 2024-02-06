// Plant.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize-config.js';

class Plant extends Model { }

Plant.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Plant',
  }
);

export default Plant;