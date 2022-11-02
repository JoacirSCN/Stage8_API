const { Router } = require('express');

const usersRoutes = require('./user.routes');

// É o /users que eu estou querendo acessar, então me leva para o arquivo usersRoutes
const routes = Router();
routes.use('/users', usersRoutes);


module.exports = routes;