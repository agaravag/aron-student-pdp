var mongoose = require('mongoose');

module.exports = mongoose.model('Student', {
  name: String,
  course: String,
  rec1: String,
  rec2: String,
  rec3: String,
  note: String
});
