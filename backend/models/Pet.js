// models/Pet.js
const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  raca: String,
  foto: String,
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' }
});
module.exports = mongoose.model('Pet', petSchema);
