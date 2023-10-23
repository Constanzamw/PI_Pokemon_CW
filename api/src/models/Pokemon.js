const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    sequelize.define('pokemon', {                       // defino el modelo
      id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,                   
      },
      name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      image:{
        type: DataTypes.STRING,
        allowNull:false
      },
      life:{
        type: DataTypes.STRING,
        allowNull:false
      },
      attack:{
        type: DataTypes.STRING,
        allowNull:false
      },
      defense:{
        type: DataTypes.STRING,
        allowNull:false
      },
      speed:{
        type: DataTypes.STRING,
        allowNull:false
      },
      height:{
        type: DataTypes.STRING,
        allowNull:false
      },
      weight:{
        type: DataTypes.STRING,
        allowNull:false,
      }

  },{ timestamps: false } );
};
