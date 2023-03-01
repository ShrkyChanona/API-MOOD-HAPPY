const { getBooks, registBook } = require("../controllers/BooksController");

const router = require("express").Router();

router.get("/", getBooks);
router.post("/", registBook);

module.exports = router;