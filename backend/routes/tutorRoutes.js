// routes/tutorRoutes.js
const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController');

router.post('/', tutorController.createTutor);
router.get('/', tutorController.getAllTutores);
router.put('/:id', tutorController.updateTutor);
router.delete('/:id', tutorController.deleteTutor);

module.exports = router;
