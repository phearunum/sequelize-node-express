
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const db = require("../models");
const UserObj = db.Users;
const Op = db.Sequelize.Op;

exports.getUsers = async () => {
  return UserObj.findAll({ status: 1 })
}
exports.findById = async (objId) => {
  return await UserObj.findAll({ where: objId })
}
exports.findByEmail = async (objEmail) => {
  return UserObj.findOne({ objEmail })
}
exports.findByPhone = async (objPhoe) => {
  return UserObj.findOne({ objPhoe })
}
exports.create = async (userBody) => {
  return await UserObj.create(userBody) 
}

exports.update = async (id, userObj) => {
   UserObj.update(userObj, {
    where: { id: id }
  })
  .then(data => {
    return data
   })
   .catch(err => {
    return err
   });
}
exports.deleted = async (id) => {
  UserObj.destroy({
    where: { id: id }
  })
  .then(data => {
    return data
   })
   .catch(err => {
    return err
   });
}

