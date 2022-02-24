const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/TasksController');

router.get('/', tasksController.listTask);
router.post('/', tasksController.createTask);

module.exports = router;