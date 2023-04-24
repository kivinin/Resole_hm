"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Client, Cart }) {
      this.belongsTo(Client, { foreignKey: "client_id" });
      this.hasMany(Cart, { foreignKey: "order_id" });

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
      
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
