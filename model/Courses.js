const mongoose = require("mongoose");

//Esquema
const CoursesCollection = new mongoose.Schema({
    name:{
        type: String,
    },
    number:{
        type: int
    },
    description:{
        type: String
    },
    tasks:{
        task1:{
            type: String
        },
        task2:{
            type: String
        },
        task3:{
            type: String
        },
        task4:{
            type: String
        },
        task5:{
            type: String
        } ,
        task6:{
            type: String
        },
        task7:{
            type: String
        },
    },
});

module.exports = mongoose.model("Courses", CoursesCollection);