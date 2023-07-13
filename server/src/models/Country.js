const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    commonName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    officialName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area:{
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  }, {timestamps: false});
};