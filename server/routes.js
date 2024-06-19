const router = require('express').Router();
const authController = require('./controllers/authController');
const coursesController = require('./controllers/coursesController')

router.use('/users', authController);
router.use('/courses', coursesController)
    
module.exports = router;