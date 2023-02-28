const mongoose = require("mongoose");

//Esquema
const CoursesCollection = new mongoose.Schema({
    NAME:{
        type: String,
    },
    DESCRIPTION:{
        type: String
    },
});

module.exports = mongoose.model("Courses", CoursesCollection);