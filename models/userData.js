const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let signupSchema = new Schema(
    {
        firstName: {
            type: String,
            default: 'fName',
            trim: true,
            required: true
        },
        lastName: {
            type: String,
            default: 'lName',
            trim: true,
            required: true
        },
        username: {
            type: String,
            default: 'username',
            trim: true,
            required: true,
            unique: true
        },
        mobile: {
            type: Number,
            default: 1234567890,
            trim: true,
        },
        email: {
            type: String,
            default: 'email@gmail.com',
            trim: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            default: 'password',
            trim: true,
            required: true,
        }
    }
);

mongoose.model('users', signupSchema);