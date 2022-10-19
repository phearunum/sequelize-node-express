const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const db = require("../models");
const AccessList = db.AccessList;
const Op = db.Sequelize.Op;

exports.getList = async () => {
    return AccessList.findAll()
}
exports.findById = async (objId) => {
    return await AccessList.findAll({ where: objId })
}
exports.create = async (obj) => {
    return await AccessList.create(obj)
}
exports.update = async (id, obj) => {
    return await AccessList.update(obj, {
        where: { id: id }
      })
}
exports.destroy = async (id) => {
  return await  AccessList.destroy({ where: { id: id }})
}