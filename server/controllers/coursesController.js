const coursesController = require('express').Router();

coursesController.get('/', async (req, res) => {
    const courses = await getAll();
});

module.exports = coursesController