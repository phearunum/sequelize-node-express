const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const db = require("../models");
const RoleAccess = db.RoleAccess;
const Op = db.Sequelize.Op;

exports.getList = async () => {
    return RoleAccess.findAll()
}
exports.findById = async (objId) => {
    return await RoleAccess.findAll({ where: objId })
}
exports.create = async (obj) => {
    return await RoleAccess.create(obj)
}
exports.update = async (id, obj) => {
    return await RoleAccess.update(obj, {
        where: { id: id }
      })
}
exports.destroy = async (id) => {
  return await  RoleAccess.destroy({ where: { id: id }})
}