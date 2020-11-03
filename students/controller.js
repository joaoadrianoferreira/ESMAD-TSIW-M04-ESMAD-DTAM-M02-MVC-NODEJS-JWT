const student = require("./model"); 

const create = (req, res) => {

    const studentToCreate = new student({ name: req.body.name, age: req.body.age });

    studentToCreate.save(function (err, newStudent) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(newStudent); 
    })

} 

const list = (res) => {
    student.find(function (err, students) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(students); 
    })
}

const getStudentsByName = (req, res) => {
    student.find({name: req.params.name}, function (err, students) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(students); 
    })
}

exports.create = create; 
exports.list = list;
exports.getStudentsByName = getStudentsByName; 