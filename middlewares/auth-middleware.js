module.exports.login = ({ email, password }, res, next) => {
    

    if(!email || !email.includes('@gmail.com')){
        var errors = {};
        if(!email)
            errors['email'] = 'Enter your email';
        else
            errors['email'] = 'Email must contains @gmail.com';

        if(errors)
            res.json({
                errors: errors
            })

    }
    else if(!password || password.length < 6){
        var errors = {};

        if(!password)
            errors['password'] = 'Enter your password';
        else
            errors['password'] = 'Password should be more than 5 characters';
        
        if(errors)
            res.json({
                errors: errors
            })
    }
    else 
        next();
}