require('dotenv').config(); 
const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const users = require('./routes/route_users')
const students = require('./routes/route_students');
const utilities = require('./utilities/utilities')

const auth = function(req, res, next) {
    let exceptions = ['/login', '/register']; 
    if(exceptions.indexOf(req.url) >= 0) {
        next(); 
    } else {
        utilities.validateToken(req.headers.authorization, (result) => {
            if(result) {
                next(); 
            } else {
                res.status(401).send("Invalid Token"); 
            }
        })
    }
}

app.use(express.json());
app.use(auth); 
app.use('/', users)
app.use('/students', students)

// MONGOOSE
//mongoose.connect('mongodb+srv://dtam:5SNhnBGKPUJTYy2M@cluster0.wsbmj.mongodb.net/DTAM?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
// TSIW
mongoose.connect('mongodb+srv://tsiw:GAa8xvmV3eKrVa8C@cluster0.b0vmz.mongodb.net/TSIW?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected to MongoDB")
});

app.listen(port, function() {
    console.log("App is running on port " + port)
})  