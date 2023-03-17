const { getDynamics, createDynamic, deleteDynamic } = require("../controllers/DynamicController");

const router = require("express").Router();

router.get("/", getDynamics);
router.post("/", createDynamic);
router.delete("/:dynamicID", deleteDynamic);

module.exports = router;