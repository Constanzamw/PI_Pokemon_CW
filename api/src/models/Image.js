const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('image', {                       
      id:{
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
        
      },
      name: {
      type: DataTypes.STRING,
      unique:true
      }   

  },{ timestamps: false } );
};