const express = require('express')
const router = express.Router();
const controller = require('./controller')

router.post('/login',  function (req, res) {
    controller.login(req, res); 
})

module.exports = router