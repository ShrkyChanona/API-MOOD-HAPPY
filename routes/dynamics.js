const { getDynamics, createDynamic } = require("../controllers/DynamicController");

const router = require("express").Router();

router.get("/", getDynamics);
router.post("/", createDynamic);

module.exports = router;