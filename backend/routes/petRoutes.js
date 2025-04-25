// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.post('/', petController.createPet);
router.get('/', petController.getAllPets);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);

module.exports = router;
