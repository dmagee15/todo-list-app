const passportJWT = require("passport-jwt");

module.exports = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'zse45tgb'
};