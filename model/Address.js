const mongoose = require("mongoose");

//Esquema
const AddressCollections = new mongoose.Schema({
    name_street:{
        type: String,
        required: true
    },
    colony:{
        type: String
    },
    cp:{
        type: String
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model("Address", AddressCollections);