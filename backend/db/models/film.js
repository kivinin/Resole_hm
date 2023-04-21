const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    static associate({ Favourite, Rating }) {
      this.hasMany(Favourite, { foreignKey: 'film_id' });
      this.hasMany(Rating, { foreignKey: 'film_id' });
    }
  }
  Film.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      poster: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Film',
    }
  );
  return Film;
};
