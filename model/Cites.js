const mongoose = require("mongoose");

//Esquema
const CitesCollection = new mongoose.Schema({
    date_create:{
        type: Date,
        default: Date.now
    },
    patient:{
        type: String
    },
    date_asis:{
        type: String,
    },
    hour:{
        type: String
    },
    
});

module.exports = mongoose.model("Cites", CitesCollection);