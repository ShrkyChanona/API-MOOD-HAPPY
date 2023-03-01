const mongoose = require('mongoose')

const PsycologistsCollection = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        requiered: true,
      },
      cellphone: {
        type: String,
        requiered: true,
      }
});

module.exports = mongoose.model("Psycologists", PsycologistsCollection);