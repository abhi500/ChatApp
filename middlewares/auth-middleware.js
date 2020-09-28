var { error } = require('../utils/response');

module.exports.login = () => {
    return (req, res, next) => {

        const { email, password } = req.query;
        let errorObj = {};

        if(!email || !email.includes('@gmail.com')){
            if(!email)
                errorObj['email'] = 'Enter your email';
            else
                errorObj['email'] = 'Email must contains @gmail.com';
        }

        if(!password || password.length < 6){
            if(!password)
                errorObj['password'] = 'Enter your password';
            else
                errorObj['password'] = 'Password should be more than 5 characters';
        }

        if(Object.keys(errorObj).length){
            error(res, 'Check your details', errorObj)
        }
        else 
            next()
    }
}


module.exports.register = () => {
    return (req, res, next) => {
        
        const {name, email, password } = req.query;
        let errorObj = {};

        if(!name || name.length < 3){
            if(!name)
                errorObj['name'] = 'Enter your name';
            else
                errorObj['name'] = 'Name must be more than 2 characters';
        }

        if(!email || !email.includes('@gmail.com')){
            if(!email)
                errorObj['email'] = 'Enter your email';
            else
                errorObj['email'] = 'Email must contains @gmail.com';
        }

        if(!password || password.length < 6){
            if(!password)
                errorObj['password'] = 'Enter your password';
            else
                errorObj['password'] = 'Password must be more than 5 characters';
        }

        if(Object.keys(errorObj).length){
            error(res, 'Check your details', errorObj)
        }
        else 
            next()
    }
}