/**
 * @typedef Student
 * @property {string} name.required
 * @property {integer} age.required
 */

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const student = mongoose.model('student', studentSchema);

module.exports = student; 