const Courses = require("../model/Courses");

const getCourses = async (req, res) => {
    Courses.find((err,collection) => {
        if(err){
            res.send(err);
        }
        res.json(collection);
    });
}

module.exports = { getCourses };