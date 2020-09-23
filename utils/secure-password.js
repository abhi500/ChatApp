const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.generateHash = (plainPassword, callback) => {
    bcrypt.genSalt(saltRounds, async (err, salt) => {
        bcrypt.hash(plainPassword, salt, async (err, hash) => {
            callback(hash);
        })
    })
}

module.exports.checkPassword = (plainPassword, hash, callback) => {
    bcrypt.compare(plainPassword, hash, (err, result) => {
        callback(result)
    })
}