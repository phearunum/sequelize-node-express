const express =require('express');
const bodyParser = require("body-parser");
const httpStatus = require('http-status')
const cors = require("cors");
const app =express();
require('dotenv').config();
const userRoute=require("./router")
const ApiError = require('./utils/ApiError');
const logger = require("./config/logger");
const log_reqres =require('./config/reqreslog')
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(log_reqres)
app.use('/api',userRoute)
// simple route
app.get("/", (req, res) => {
  res.json({ message: "API request is working " });
});

app.listen(3000,()=>{
  logger.info('server running port 3000')
})