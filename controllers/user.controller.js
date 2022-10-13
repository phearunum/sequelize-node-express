
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const userService = require('../services/user.service');
const Encrypt = require('../middleware/bcryptconf')
const getUser = catchAsync (async(req, result) => {
  const data = await userService.getUsers();
  if (data) {
    result.status(200).send({
      data: data,
      smg: 'success'
    });
  } else {
    result.status(500).send({
      data: [],
      smg: "Some error occurred while retrieving data."
    });
  }
})
const findById = catchAsync(async(req, resp) => {
  const findObj = {
    id: req.params.id
  }
  await userService.findById(findObj)
    .then(data => {
      resp.status(200).send({
        data: data,
        msg: 'success',
        params: findObj,
        method: req.method
      });
    })
    .catch(err => {
      resp.status(500).send({
        msg: err
      });
    });
})
const create =async(req,resp)=>{
  const userObj=req.body;
  userObj.password = await Encrypt.cryptPassword(req.body.password);
  try {
   const data= await userService.create(userObj)
    resp.status(200).send({
      data: data,
      msg: 'success',
      method: req.method
    });
  } catch (error) {
    resp.status(500).send({
      msg:'error',
      valid:error.parent.sqlMessage,
      type:error.name
    });
  };

};
const update = catchAsync(async(req,resp)=>{
  const id =req.body.id;
  const userObj=req.body;
  userObj.password = await Encrypt.cryptPassword(req.body.password);
  await userService.update(id,userObj)
  .then(data => {
    resp.status(200).send({
      data: data,
      msg: 'success',
   //   params: req.body,
      method: req.method
    });
  })
  .catch(err => {
    resp.status(500).send({
      msg: err
    });
  });
})

const deleted = catchAsync(async(req,resp)=>{
const id=req.body.id
await userService.deleted(id)
.then(data => {
  resp.status(200).send({
    data: data,
    msg: 'success',
    params: req.body,
    method: req.method
  });
})
.catch(err => {
  resp.status(500).send({
    msg: err
  });
});
});

module.exports = {
  getUser,
  findById,
  create,
  update,
  deleted
}