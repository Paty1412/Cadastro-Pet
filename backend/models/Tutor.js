// models/Tutor.js
const mongoose = require('mongoose');
const tutorSchema = new mongoose.Schema({
  nome: String,
  telefone: String,
  endereco: String
});
module.exports = mongoose.model('Tutor', tutorSchema);
