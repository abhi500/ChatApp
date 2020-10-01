const jwt = require('jsonwebtoken');
const { error } = require('../utils/response');


module.exports.addUserId = () => {
    return (req, res, next) => {
        const { authorization } = req.headers;
        const token = authorization.split(' ')[1];
        const user = jwt.decode(token, 'shhhhh');
        if(!user)
            error(res, 'User not authentication');
        else{
            req.headers.userid = user.id;
            next();
        }
    }
}