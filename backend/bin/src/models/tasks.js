const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  author: {
    type: String,
    required: true,
    trim: true
  },
  task: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Tasks', schema);