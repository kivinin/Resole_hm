"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Client, Cart }) {
      this.belongsTo(Client, { foreignKey: "client_id" });
      this.belongsTo(Cart, { foreignKey: "cart_id" });

    }
  }
  Order.init(
    {
      client_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Clients",
          key: "id",
        },
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      cart_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Carts",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
