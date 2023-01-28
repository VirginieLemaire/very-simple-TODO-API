const Task = require('../models/task');

const taskController = {
    // Get all todo items
    getAllTasks: async (req, res) => {
        try {
            const tasks = await Task.findAll();
            res.json(tasks);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    // Get a single todo item by id
    getTaskById: async (req, res) => {
        try {
            const task = await Task.findByPk(req.params.id);
            task ? res.json(task) : res.status(404).json({ message: 'Task not found' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    // Create a new todo item
    createTask: async (req, res) => {
        try {
            console.log(req.body);
            const task = await Task.create(req.body);
            res.status(201).json(task);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
};

module.exports = taskController;