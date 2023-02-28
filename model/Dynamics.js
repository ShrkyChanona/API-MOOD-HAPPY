const mongoose = require("mongoose");

//Esquema
const DynamicsCollection = new mongoose.Schema({
    name:{
        type: String,
    },
    description:{
        type: String
    },
});

module.exports = mongoose.model("Dynamics", DynamicsCollection);