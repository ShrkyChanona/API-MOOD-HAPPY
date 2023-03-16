const Books = require("../model/Books");

const getBooks = async (req, res) => {
    Books.find((err,collection) => {
        if(err){
            res.send(err);
        }
        res.json(collection);
    });
};

const registBook = async (req, res) => {
    const book = new Books({
        name: req.body.name,
        author: req.body.author,
        date_publication: req.body.date_publication
    });

    book.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
};

const deleteBook = async (req, res) => {
    Todo.deleteOne({ _id: req.params.bookID })
      .then(() => res.json({ message: "book Deleted" }))
      .catch((err) => res.send(err));
  };

module.exports = {
    getBooks, registBook,deleteBook
}