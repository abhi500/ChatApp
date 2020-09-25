var { error } = require('../utils/response');

module.exports.login = () => {
    return (req, res, next) => {

        const { email, password } = req.query;
        const errors = [];

        if(!email || !email.includes('@gmail.com')){
            if(!email)
                errors.push({'email': 'Enter your email'});
            else
                errors.push({'email': 'Email must contains @gmail.com'});
        }

        if(!password || password.length < 6){
            if(!password)
                errors.push({'password': 'Enter your password'});
            else
                errors.push({'password': 'Password should be more than 5 characters'});
        }

        if(errors.length){
            error(res, 'Check your details', errors)
        }
        else 
            next();
    }
}