const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller_users')
const { validationResult, body } = require('express-validator')


/**
 * @route POST /login
 * @group Users
 * @param {object} object.body - User's Credentials - eg. {"username":"admin", "password":"1234"}
 * @returns {object} 200 - Bearer Token
 * @returns {Error} 400 - Unexpected error
 */
router.post('/login',  function (req, res) {
    controller.login(req, res); 
})

/**
 * @route POST /register
 * @group Users
 * @param {object} object.body - User's Credentials - eg. {"username":"admin", "password":"1234"} 
 * @returns {object} 200 - Created User
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 406 - Duplicated User
 */
router.post('/register', [
    body('username').notEmpty().escape(), 
    body('password').notEmpty().escape()
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.register(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

module.exports = router