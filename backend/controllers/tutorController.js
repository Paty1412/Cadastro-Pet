// controllers/tutorController.js
const Tutor = require('../models/Tutor');

exports.createTutor = async (req, res) => {
  const novoTutor = await Tutor.create(req.body);
  res.status(201).json(novoTutor);
};

exports.getAllTutores = async (req, res) => {
  const tutores = await Tutor.find();
  res.json(tutores);
};

exports.updateTutor = async (req, res) => {
  const tutor = await Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(tutor);
};

exports.deleteTutor = async (req, res) => {
  await Tutor.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
