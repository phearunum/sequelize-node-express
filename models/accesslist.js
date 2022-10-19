'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccessList extends Model {
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