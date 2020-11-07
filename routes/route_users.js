const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller_users')

router.post('/login',  function (req, res) {
    controller.login(req, res); 
})

module.exports = router