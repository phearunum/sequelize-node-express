'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {
      // define association here
    }
  }
  Roles.init({
    role_name: DataTypes.STRING,
    role_status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};