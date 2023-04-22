"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Cart }) {
      this.hasMany(Cart, { foreignKey: "product_id" });
    }
  }
  Product.init(
    {
      product_name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      product_price: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      product_description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      product_image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
