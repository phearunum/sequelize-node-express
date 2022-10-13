const { required } = require('joi');
var winston = require('winston');
const logg =require('../config/logger')
module.exports = function(req, res, next) {
    var logmsg = {
        'Request IP':req.ip,
        'Method':req.method,
        'URL':req.originalUrl,
        'statusCode':res.statusCode,
        'headers':req.headers,
        'Time':new Date(),
        'message':null
    };
    logg.info(logmsg);
    next();
}