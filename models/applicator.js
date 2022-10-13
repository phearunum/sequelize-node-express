'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applicator extends Model {
    static associate(models) {
      // define association here
    }
  }
  Applicator.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    sex: DataTypes.STRING,
    national_id: DataTypes.STRING,
    dob: DataTypes.STRING,
    pob: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    edu_level: DataTypes.INTEGER,
    school: DataTypes.STRING,
    perstionl_status: DataTypes.STRING,
    photo: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Applicator',
  });
  return Applicator;
};