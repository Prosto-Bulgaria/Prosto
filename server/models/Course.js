const {Schema, Types, model} = require('mongoose')

const courseSchema = new Schema({
    title:{
        required: true,
        type: String,
        minlength: [4, 'Title must be at least 4 characters long']
    },
    description:{
        required:true,
        type: String,
        minlength: [20, 'Description must be at least 20 characters long']
    },
    image:{
        required: true,
        type: String
    }
})

const Course = model('Course', courseSchema)

module.exports = Course;