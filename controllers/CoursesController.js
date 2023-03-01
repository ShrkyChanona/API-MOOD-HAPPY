const Courses = require("../model/Courses");

const getCourses = async (req, res) => {
    Courses.find((err,collection) => {
        if(err){
            res.send(err);
        }
        res.json(collection);
    });
};

const addCourse = async (req, res) => {
    const course = new Courses({
        date_create: req.body.date_create,
        date_asis: req.body.date_asis,
        hour: req.body.hour
    });

    course.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
};

module.exports = { getCourses, addCourse };