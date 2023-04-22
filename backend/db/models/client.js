"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate({ Order, Service_order }) {
      this.hasMany(Order, { foreignKey: "client_id" });
      this.hasMany(Service_order, { foreignKey: "client_id" });
    }
  }
  Client.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      number: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      adress: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
