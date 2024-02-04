
import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize-config.js';

class Plant extends Model { }

Plant.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
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
}, {
    sequelize,
    modelName: 'Plant', // Make sure the model name matches the export name
});

export default Plant;