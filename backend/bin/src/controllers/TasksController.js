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
exports.listMentions = async (req, res) => {
    try {
      const data = await Tasks.find({}, 'author tasks description -_id');
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar as tarefas'});
    }
  };

console.log(newtask)

await newtask.save();

try {
    res.status(201).send({message: 'Tarefa cadastrada com sucesso'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a Tarefa'});
}