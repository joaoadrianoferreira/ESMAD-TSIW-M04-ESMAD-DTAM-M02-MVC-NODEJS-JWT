var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_students')
const student = require('../models/model_students')
const { validationResult, body, param } = require('express-validator')


/**
 * @route GET /students
 * @group Students
 * @returns {object} 200 - An array of Students info
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/',  function (req, res) {
    controller.list(res); 
})

/**
 * @route GET /students/{name}
 * @group Students
 * @param {string} name.path - Student's name.
 * @returns {object} 200 - An array of Students info
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/:name', [
    param('name').notEmpty().escape(), 
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getStudentsByName(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

/**
 * @route POST /students/
 * @group Students
 * @param {object} object.body - Student - eg. {"name": "Joaquim", "age": 23}
 * @returns {object} 200 - New Student
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.post('/', [
    body('name').notEmpty().escape(), 
    body('age').isNumeric()
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.create(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

module.exports = router