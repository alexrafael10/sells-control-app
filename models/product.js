'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    ref: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
      timestamps: false,
      freezeTableName: true
    }
  );

  Product.associate = (models) => {
    Product.belongsToMany(models.Sell, {
      through: {
        model: 'SellProduct',
        unique: false
      },
      as: 'ProductsSell',
      foreignKey: 'ProductId',
      constraints: false,
      timestamps: false
    })
  }
  return Product;
};