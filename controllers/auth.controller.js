const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const Encrypt = require('../middleware/bcryptconf')
const jwt = require('jsonwebtoken');
const db = require("../models");
const UserObj = db.Users;
const Op = db.Sequelize.Op;

exports.AuthLogin =async (req, resp) => {
    const password = req.body.password;
    const username = req.body.username;

    await UserObj.findOne({ where: { username:username } })
        .then(async (data) => {
            const is_compared = await Encrypt.comparePassword(password,data.password);
            if(is_compared){
                const token = jwt.sign(
                    { id: data.id, username }, process.env.TOKEN_KEY, { expiresIn: "2h", }
                );
                resp.status(200).send({
                    data: data,
                    msg: 'success',
                    status:true,
                    method: req.method,
                    token: token,
                  });
            }else{
                resp.status(200).send({
                    data: null,
                    msg:'Invalid Credentials',
                    status: 'false',
                    method: req.method,
                    token: null,
                  });
            }
        })
        .catch(err => {
            resp.status(200).send({
                msg: err
            });
        });
}