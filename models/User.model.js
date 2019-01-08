const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    id: {type: Number , required: true, unique: true},
    first_name: {type: String, required: true, unique: false},
    last_name: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true, unique: false}
});

const User = mongoose.model('User', UserSchema);


module.exports = User ;