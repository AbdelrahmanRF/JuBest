const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
});

UserSchema.plugin(passportLocalMongoose, {
    usernameField: 'email',
    passwordField: 'password'
});
module.exports = mongoose.model('User', UserSchema);