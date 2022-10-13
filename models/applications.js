'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Applications.init({
    app_name: DataTypes.STRING,
    app_ministry: DataTypes.STRING,
    app_desc: DataTypes.STRING,
    app_startOn: DataTypes.STRING,
    app_closeON: DataTypes.STRING,
    app_status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Applications',
  });
  return Applications;
};