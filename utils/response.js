/**
 * response status with error messages
 * @param {*} res 
 * @param {*} message 
 */
module.exports.error = (res, message) => {
    res.json({
        state: false,
        message: message,
        errors: []
    })
}

/**
 * return status with data
 * @param {*} res 
 * @param {*} message 
 */
module.exports.success = (res, message, data) => {
    res.json({
        state: true,
        message: message,
        data: data
    })
}