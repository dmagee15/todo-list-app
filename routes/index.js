const routes = require('express').Router();
const login = require('./login');
const access = require('./access');
const signup = require('./signup');
const update = require('./update');


routes.use('/login', login);
routes.use('/access', access);
routes.use('/signup', signup);
routes.use('/update', update);

module.exports = routes;