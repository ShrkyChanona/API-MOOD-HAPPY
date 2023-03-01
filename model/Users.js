const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const UsersCollection = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    //en caso de que no escriba nada coloca el siguiente valor
    //default: type,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    requiered: true,
  },
  email: {
    type: String,
    requiered: true,
  },
  password: {
    type: String,
    requiered: true,
  },
  membership:{
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Users", UsersCollection); 