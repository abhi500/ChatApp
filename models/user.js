const mongoose =  require('mongoose');
const { Schema } = mongoose;

const value = {
    type: String,
    required: true,
    trim: true,
    unique: false
};

// create user schema
const userSchema = new Schema({
        name: value,
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: value,
    },{ 
        timestamps: true, 
        versionKey: false  
});

module.exports = mongoose.model('users', userSchema);

