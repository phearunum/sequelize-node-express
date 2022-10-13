const express = require('express');
const router=express.Router();

const userRoute = require('../controllers/user.controller')
  router.get("/list", userRoute.getUser)
        .get("/findId/:id", userRoute.findById)
        .post("/create",userRoute.create)
        .post("/update",userRoute.update)
        .post("/delete",userRoute.deleted)
module.exports = router