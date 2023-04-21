const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ User, Film }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Film, { foreignKey: 'film_id' });
    }
  }
  Rating.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      film_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Films',
          key: 'id',
        },
      },
      rate: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Rating',
    }
  );
  return Rating;
};
