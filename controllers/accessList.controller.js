const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger')

const AclService = require('../services/accessList.service');
const logg = require('logg');

const getList = catchAsync(async (req, resp) => {
    try {
        const data = await AclService.getList()
        resp.status(200).send({
            data: data,
            msg: 'success',
            method: req.method
        });
    } catch (error) {
        logger.info(error)
        resp.status(500).send({
            msg: 'error',
            valid: error
        });
    };
})
const findById = catchAsync(async (req, resp) => {
    try {
        const data = await AclService.findById(req.body.id)
        resp.status(200).send({
            data: data,
            msg: 'success',
            method: req.method
        });
    } catch (error) {
        const err = {
            msg: 'error',
            valid: error
        }
        logger.info(error)
        resp.status(500).send(err);
    };
})
const create = catchAsync(async (req, resp) => {
    const userObj = req.body;
    try {
        const data = await AclService.create(userObj)
        resp.status(200).send({
            data: data,
            msg: 'success',
            method: req.method
        });
    } catch (error) {
        logg.info(error)
        resp.status(500).send({
            msg: 'error',
            valid: error.parent.sqlMessage,
            type: error.name
        });
    };
})

const update = catchAsync(async (req, resp) => {
    const id = req.body.id;
    const userObj = req.body;
    try {
        const data = await await AclService.update(id, userObj)
        resp.status(200).send({
            data: data,
            msg: 'success',
            method: req.method
        });
    } catch (error) {
        logg.info(error)
        resp.status(500).send({
            msg: 'error',
            valid: error.parent.sqlMessage,
            type: error.name
        });
    };
})

const deleted =catchAsync(async(req,resp)=>{
    try {
        const id=req.body.id
        const data = await await RoleService.destroy(id)
        resp.status(200).send({
            data: data,
            msg: 'success',
            method: req.method
        });
    } catch (error) {
        logg.info(error)
        resp.status(500).send({
            msg: 'error',
            valid: error.parent.sqlMessage,
            type: error.name
        });
    };
})
module.exports = {
    getList,
    findById,
    create,
    update,
    deleted
}