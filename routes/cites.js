const { getCites, createCite } = require("../controllers/CitesController");

const router = require("express").Router();

router.get("/", getCites);
router.post("/",createCite);

module.exports = router;