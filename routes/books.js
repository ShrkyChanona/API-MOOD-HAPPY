const { getBooks, registBook, deleteBook } = require("../controllers/BooksController");

const router = require("express").Router();

router.get("/", getBooks);
router.post("/", registBook);
router.delete("/:bookID",deleteBook);

module.exports = router;