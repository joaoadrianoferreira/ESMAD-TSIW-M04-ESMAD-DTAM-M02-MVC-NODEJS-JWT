const checkToken = (authorization, callback) => {
    if(authorization) {
        return callback(true); 
    } else {
        return callback(false); 
    }
}

exports.checkToken = checkToken