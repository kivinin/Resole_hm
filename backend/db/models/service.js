"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ Service_order }) {
      this.hasMany(Service_order, { foreignKey: "service_id" });
    }
  }
  Service.init(
    {
      service_name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      service_description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      service_image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
