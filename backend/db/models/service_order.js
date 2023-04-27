"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service_order extends Model {
    static associate({ Client, Service }) {
      this.belongsTo(Client, { foreignKey: "client_id" }),
        this.belongsTo(Service, { foreignKey: "service_id" });
    }
  }
  Service_order.init(
    {
      client_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Clients",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      service_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Services",
          key: "id",
        },
      },
      status: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      unique_key: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      before_img: {
        type: DataTypes.TEXT,
      },
      after_img: {
        type: DataTypes.TEXT,
      },
      comments: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Service_order",
    }
  );
  return Service_order;
};
