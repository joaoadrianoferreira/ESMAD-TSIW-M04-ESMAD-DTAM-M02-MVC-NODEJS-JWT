const login = (req, res) => {
    if(req.body.username == 'user' && req.body.password == 'pass') {
        res.status(200).send("Success");
    } else {
        res.status(401).send("Not Authorized"); 
    }
} 

exports.login = login; 
