'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sell = sequelize.define('Sell', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ClientId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Client',
        key: 'id'
      }
    },
    payment: DataTypes.ENUM('credit', 'debit', 'cash'),
    comment: DataTypes.STRING,
  }, {
      timestamps: false,
      freezeTableName: true
    });

  Sell.associate = (models) => {
    Sell.belongsTo(models.Client, { foreignKey: 'ClientId', targetKey: 'id'}),
      Sell.belongsToMany(models.Product, {
        through: {
          model: 'SellProduct',
          unique: false
        },
        as: 'ProductsSold',
        foreignKey: 'SellId',
        constraints: false,
        timestamps: false
      })
  }
  return Sell;
};