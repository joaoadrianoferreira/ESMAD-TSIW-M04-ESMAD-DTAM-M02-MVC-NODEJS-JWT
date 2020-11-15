/**
 * @typedef User
 * @property {string} username.required
 * @property {string} password.required
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const user = mongoose.model('tbl_users', userSchema);

module.exports = user; 