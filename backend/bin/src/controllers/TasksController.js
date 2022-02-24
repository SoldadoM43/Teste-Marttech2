const mongoose = require('mongoose');
const Tasks = mongoose.model('Tasks');

// list
exports.listTasks = async (req, res) => {
  try {
    const data = await Tasks.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as tarefas.'});
  }
};

// create
exports.createTasks = async (req, res) => {
  try {
    const newtask = new Tasks({
      author: req.body.author,
      task: req.body.task
    });

    console.log(newtask)

    await newtask.save();

    res.status(201).send({message: 'Tarefa cadastrada com sucesso'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a Tarefa'});
  }
};