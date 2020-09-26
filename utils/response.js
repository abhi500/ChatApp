/**
 * response status with error messages
 * @param {*} res 
 * @param {*} message 
 */
module.exports.error = (res, message, error = null) => {
    return res.json({
        status: false,
        message: message,
        error: error ? error : {}
    })
}

/**
 * return status with data
 * @param {*} res 
 * @param {*} message 
 */
module.exports.success = (res, message, data) => {
    res.json({
        status: true,
        message: message,
        data: data
    })
}