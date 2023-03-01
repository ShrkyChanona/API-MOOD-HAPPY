const {getPsycologists, registPsycologist} = require("../controllers/PsycologistController");

const router = require("express").Router();

router.get("/", getPsycologists);
router.post('/',registPsycologist);

module.exports = router;