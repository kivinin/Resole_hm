const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate({ User, Film }) {
      Film.belongsToMany(User, {
        through: Favourite,
        foreignKey: 'film_id',
        otherKey: 'user_id',
      });
      User.belongsToMany(Film, {
        through: Favourite,
        foreignKey: 'user_id',
        otherKey: 'film_id',
      });
    }
  }
  Favourite.init(
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
    },
    {
      sequelize,
      modelName: 'Favourite',
    }
  );
  return Favourite;
};
