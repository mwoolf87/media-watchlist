'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flick.belongsTo(models.User);
    }
  };
  Flick.init({
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    runTime: DataTypes.STRING,
    year: DataTypes.STRING,
    director: DataTypes.STRING,
    imdbRating: DataTypes.STRING,
    UserId: DataTypes.STRING,
    genre: DataTypes.STRING,
    language: DataTypes.STRING,
    metaScore: DataTypes.STRING,
    plot: DataTypes.STRING,
    rated: DataTypes.STRING,
    released: DataTypes.STRING,
    imdbID: DataTypes.STRING


  }, {
    sequelize,
    modelName: 'Flick',
  });
  return Flick;
};