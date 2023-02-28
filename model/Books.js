const mongoose = require("mongoose");

//Esquema
const BooksCollections = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String
    },
    date_publication:{
        type: String
    }
});

module.exports = mongoose.model("Books", BooksCollections);