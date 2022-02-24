const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const TasksController = require('../controllers/TasksController');

router.get('/', TasksController.listTasks);
router.post('/', [
    check('author').isLength({ min: 3 }).withMessage("O nome precisa ter no mínimo 3 caracteres."),
    check('mention').isLength({ min: 20, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], TasksController.createTasks);

module.exports = router;