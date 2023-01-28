const Task = require('../models/task');

const taskController = {
    getAllTasks: async (req, res) => {
        try {
            const tasks = await Task.findAll();
            res.json(tasks);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
};

module.exports = taskController;