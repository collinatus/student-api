const students = require('../data/students.js');

exports.getAllStudents = (req, res) => {
    return res.status(200).json({students, message: 'All the students'});
}

exports.getSingleStudent = (req, res) => {
    let findStudent = students.find(student => student.id === parseInt(req.params.id, 10));
    if (findStudent) {
        return res.status(200).json({student: findStudent, message: 'Student found'});
    }
    return res.status(400).json({message: 'Student not found'});
}

