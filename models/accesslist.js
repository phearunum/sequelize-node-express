'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccessList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AccessList.init({
    acce_name: DataTypes.STRING,
    acce_url: DataTypes.STRING,
    acce_isMenu: DataTypes.INTEGER,
    acce_subof: DataTypes.INTEGER,
    acce_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AccessList',
  });
  return AccessList;
};