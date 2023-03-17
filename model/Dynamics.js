const mongoose = require("mongoose");

//Esquema
const DynamicsCollection = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        des1:{
            type: String
        },
        des2:{
            type: String
        },
        des3:{
            type: String
        },
        des4:{
            type: String
        },
        des5:{
            type: String
        }
    },
    image:{
        type: String
    }
});

module.exports = mongoose.model("Dynamics", DynamicsCollection);