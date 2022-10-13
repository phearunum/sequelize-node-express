const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const db = require("../models");
const RoleObj = db.Roles;
const Op = db.Sequelize.Op;

exports.getList = async () => {
    return RoleObj.findAll()
}
exports.findById = async (objId) => {
    return await RoleObj.findAll({ where: objId })
}
exports.create = async (obj) => {
    return await RoleObj.create(obj)
}

exports.update = async (id, obj) => {
    return await RoleObj.update(obj)
}
exports.destroy = async (id) => {
  return await  RoleObj.destroy({ where: { id: id }})
}
