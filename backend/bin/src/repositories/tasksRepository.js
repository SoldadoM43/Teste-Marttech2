const mongoose = require('mongoose');
const Tasks = mongoose.model('Tasks');

exports.listTasks = async () => {
  const res = await Tasks.find({}, 'author task description -_id');
  return res;
};

exports.createTesks = async data => {
  const task = new Tasks(data);
  await task.save();
};