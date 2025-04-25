// server.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

console.log('MONGO_URL:', process.env.DB);
const express = require('express');           // ← adicionamos
                // ← adicionamos
const mongoose = require('mongoose');
const app = require('./app.js');

const {
  PORT = 3000
} = process.env;
console.log(process.env.DB)
const DB = process.env.DB
console.log("🔍 DB URL:", process.env.DB);

const mongoURI = DB
console.log("banco", mongoURI)
mongoose.connect(mongoURI)
  .then(() => console.log('✅ Conectado ao MongoDB Atlas'))
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Serve arquivos estáticos do front-end
// Ajuste 'frontend/public' se seu HTML/CSS/JS estiver em outra pasta
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// Rota raiz: entrega o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
