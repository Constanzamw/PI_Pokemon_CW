const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    sequelize.define('favorite', {                       
      id:{
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        unique:true,                     
      },
      
      name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
      },
      image:{
        type: DataTypes.STRING,
        allowNull:true
      },
      hitPoints:{
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
