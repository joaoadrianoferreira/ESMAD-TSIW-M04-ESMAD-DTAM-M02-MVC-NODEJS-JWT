var jwt = require('jsonwebtoken');

const generateToken = (user_info, callback) => {
    let secret = process.env.SECRET; 
    let token = jwt.sign({
        data: user_info,
    }, secret, {expiresIn: '24h'});
    return callback(token); 
}

const validateToken = (token, callback) => {
<<<<<<< HEAD
    if(!token) {
        return callback(false); 
    }
=======
    if(!token) {return callback(false)}
>>>>>>> c1af2ceb6a49b6b2958cdc5ef7ba4177f5d13ce4
    let secret = process.env.SECRET; 
    jwt.verify(token.replace('Bearer ', ''), secret, function(error, decoded) {
        if(error) {
            return callback(false);
        } else {
            return callback(true)
        }
    })
}

exports.generateToken = generateToken
exports.validateToken = validateToken