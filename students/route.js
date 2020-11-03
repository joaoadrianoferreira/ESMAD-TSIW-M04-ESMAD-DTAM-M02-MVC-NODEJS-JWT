var express = require('express')
var router = express.Router()
var controller = require('./controller')
const { validationResult, body, param, Result } = require('express-validator')

router.get('/',  function (req, res) {
    controller.list(res); 
})

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