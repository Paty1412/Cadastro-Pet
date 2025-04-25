const express = require('express');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes');
const tutorRoutes = require('./routes/tutorRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas de API
app.use('/pets', petRoutes);
app.use('/tutores', tutorRoutes);

module.exports = app;
