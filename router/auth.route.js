const express = require('express');
const router=express.Router();

const userRoute = require('../controllers/auth.controller')
  router.post("/login", userRoute.AuthLogin)
module.exports = router