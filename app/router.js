const express = require('express');
const taskController = require('./controllers/taskController');
const router = express.Router();


router.get('/', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks', taskController.createTask);

module.exports = router;