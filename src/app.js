const express = require('express');
const cors = require('cors');

const cpfRoutes = require('./routes/cpfRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/cpf', cpfRoutes);

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'CPF Validator API online'
  });
});

app.use(errorHandler);

module.exports = app;
