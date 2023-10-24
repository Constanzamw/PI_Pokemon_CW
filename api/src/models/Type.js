const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('type', {                       
      id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement:true
      },
      name: {
      type: DataTypes.STRING,
      allowNull: false,
      }   

  },{ timestamps: false } );
};

/*ENUM('normal', 'fighting', 'flying',
'poison', 'ground', 'rock',
'bug', 'ghost', 'steel',
'fire', 'water', 'grass',
'electric', 'psychic', 'ice',
'dragon', 'dark', 'fairy',
'unknown', 'shadow')*/