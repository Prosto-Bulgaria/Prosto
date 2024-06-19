const Course = require("../models/Course")

async function getAll(){
    return await Course.find({});
}

async function getById(id) {
    return await Course.findById(id);
}

async function deleteCourse(id){
    await Course.findByIdAndRemove(id);
}