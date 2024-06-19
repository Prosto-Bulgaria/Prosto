const { createCourse, getById, getAll } = require('../services/coursesService');

const coursesController = require('express').Router();

coursesController.get('/', async (req, res) => {
    const courses = await getAll();
    res.status(200).json(courses);
});

coursesController.post('/', async (req, res) => {
    const data = req.body
    try {
        const course = await createCourse(data);
        res.status(201).json(course)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

coursesController.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const course = await getById(id);
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json('Invalid course ID')
    }
})

module.exports = coursesController