const mongoose = require("mongoose");

//Esquema
const AudioBooksCollections = new mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    author:{
        type: String
    },
    date_of_publication:{
        type: String
    },
    lenguage:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("AudioBooks", AudioBooksCollections);