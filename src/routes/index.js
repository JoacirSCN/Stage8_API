const { Router } = require('express');

const usersRoutes = require('./user.routes');
const notesRoutes = require('./notes.routes'); 
const tagsRoutes = require('./tags.routes');
const sessionsRoutes = require('./sessions.routes');

// É o /users que eu estou querendo acessar, então me leva para o arquivo usersRoutes
const routes = Router();
routes.use('/users', usersRoutes);
routes.use('/notes', notesRoutes);
routes.use('/tags', tagsRoutes);
routes.use('/sessions', sessionsRoutes);



module.exports = routes;