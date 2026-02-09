const express = require('express');
const cors = require('cors');
const path = require('path'); // Importante para achar a pasta

const cpfRoutes = require('./routes/cpfRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// --- AQUI ESTÁ A MÁGICA ---
// Isso diz: "A pasta 'public' está no mesmo lugar que este arquivo app.js"
app.use(express.static(path.join(__dirname, 'public')));

// Rotas da API
app.use('/cpf', cpfRoutes);

app.use(errorHandler);

module.exports = app;