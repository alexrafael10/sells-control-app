'use strict';
module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define('Client', {
    document_id: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true
  });

  Client.associate = (models) => {
    Client.hasMany(models.Sell,{
      foreignKey: 'ClientId',
      as: 'Sells'
    })
  }
  return Client;
};