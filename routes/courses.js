const { getCourses } = require("../controllers/CoursesController");

const router = require("express").Router();

router.get("/", getCourses);

module.exports = router;