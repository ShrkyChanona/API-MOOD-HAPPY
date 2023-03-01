const { getCourses, addCourse } = require("../controllers/CoursesController");

const router = require("express").Router();

router.get("/", getCourses);
router.post("/", addCourse);

module.exports = router;