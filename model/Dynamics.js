const mongoose = require("mongoose");

//Esquema
const DynamicsCollection = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        desGeneral:{
            type: String
        },
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
    },
    imagesDes:{
        imageDes1:{
            type: String
        },
        imageDes2:{
            type: String
        },
        imageDes3:{
            type: String
        },
        imageDes4:{
            type: String
        },
        imageDes5:{
            type: String
        }
    }
});

module.exports = mongoose.model("Dynamics", DynamicsCollection);