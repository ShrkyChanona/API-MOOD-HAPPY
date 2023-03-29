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
        name: req.body.name,
        number: req.body.number,
        description: req.body.description,
        tasks: req.body.tasks,
    });

    course.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
};

module.exports = { getCourses, addCourse };