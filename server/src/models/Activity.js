const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activity', {
    ID:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    difficulty:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    duration:{
        type: DataTypes.TIME,
        allowNull: false
    },
    season:{
        type: DataTypes.ENUM ("Summer", "Autumn", "Winter", "Spring")
    }
  }, {timestamps: false});
};