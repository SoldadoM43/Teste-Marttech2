const { validationResult } = require('express-validator');
const repository = require('../repositories/tasksRepository');

exports.listTasks = async (req, res) => {
  try {
    const data = await repository.listTasks();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as Tarefas'});
  }
};

exports.createTask = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }
  try {
    await repository.createTask({
      author: req.body.author,
      task: req.body.task,
      description: req.body.description
    });

    return res.status(201).send({message: 'Tarefa adicionada com sucesso!'});

  } catch (e) {
    
    return res.status(500).send({message: 'Falha ao adicionar a tarefa.'});

  }
};

exports.deleteTask = async (req, res) => {
};

exports.putTask = async (req, res) => {

};