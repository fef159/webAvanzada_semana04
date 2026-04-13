const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Motor EJS
app.set('view engine', 'ejs');

// Rutas
const rutas = require('./routes/rutas');
app.use('/', rutas);

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});