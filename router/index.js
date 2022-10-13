const express = require('express');
const router = express.Router();
const userRoute =require('./user.route')
const roleRoute =require('./role.route')

const defaultRoutes = [
    {
      path: '/users',
      route: userRoute,
    },
    {
        path: '/roles',
        route: roleRoute,
    },
]  
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
  


module.exports = router;