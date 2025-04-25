// controllers/petController.js
const Pet = require('../models/Pet');

exports.createPet = async (req, res) => {
  const novoPet = await Pet.create(req.body);
  res.status(201).json(novoPet);
};

exports.getAllPets = async (req, res) => {
  const pets = await Pet.find().populate('tutor');
  res.json(pets);
};

exports.updatePet = async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(pet);
};

exports.deletePet = async (req, res) => {
  await Pet.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
