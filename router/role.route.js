const express = require('express');
const router=express.Router();

const roleRoute = require('../controllers/role.constoller')
router.get("/list", roleRoute.getList)
      .get("/id/:id",roleRoute.findById)
      .post("/create",roleRoute.create)
      .post("/update",roleRoute.update)
      .post("/delete",roleRoute.deleted)

module.exports = router