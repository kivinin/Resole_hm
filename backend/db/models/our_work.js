"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Our_work extends Model {
    static associate(models) {}
  }
  Our_work.init(
    {
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      work_description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Our_work",
    }
  );
  return Our_work;
};
