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
    },
    // Update a todo item
    updateTask: async (req, res) => {
        try {
            // Check if the task exists
            const task = await Task.findByPk(req.params.id);
            // if it does, update it
            if (task) {
                await task.update(req.body);
                res.json(task);
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    // Delete a todo item
    deleteTask: async (req, res) => {
        try {
            // Check if the task exists
            const task = await Task.findByPk(req.params.id);
            // if it does, delete it
            if (task) {
                await task.destroy();
                res.json({ message: 'Task deleted' });
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = taskController;