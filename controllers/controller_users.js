const utilities = require('../utilities/utilities')

const login = (req, res) => {
    if(req.body.username == 'user' && req.body.password == 'pass') {
        utilities.generateToken({user: req.body.username}, (token) => {
            res.status(200).json(token); 
        })
    } else {
        res.status(401).send("Not Authorized"); 
    }
} 

exports.login = login; 
