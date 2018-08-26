const main = require('express').Router();
const update = require('./update');
const passport = require('passport');

main.post('/', passport.authenticate('jwt', { session: false }), update);

module.exports = main;