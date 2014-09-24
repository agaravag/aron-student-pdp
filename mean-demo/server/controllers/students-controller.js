var Student = require('../models/student');

module.exports.create = function (req, res) {
  //console.log(req.body);
  var student = new Student(req.body);
  student.save(function (err, result) {
    res.json(result);
  });
};

module.exports.list = function (req, res) {
  Student.find({}, function (err, results) {
    res.json(results);
  });
};
