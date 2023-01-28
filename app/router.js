const express = require('express');
const taskController = require('./controllers/taskController');
const router = express.Router();

// Redirect to /tasks
router.get('/', (_, res) => { res.redirect('/tasks'); });
// Read datas
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
// Create, update and delete datas
router.post('/tasks', taskController.createTask);
router.patch('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;