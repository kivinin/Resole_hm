"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ Product, Order }) {
      this.belongsTo(Product, { foreignKey: "product_id" });
      this.hasOne(Order, { foreignKey: "cart_id" });
    }
  }
  Cart.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
