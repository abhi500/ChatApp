var jwt = require('jsonwebtoken');

module.exports.token = (user) => {
    return jwt.sign(user, 'shhhhh')
}