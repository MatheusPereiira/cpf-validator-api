const express = require('express');
const cors = require('cors');

const cpfRoutes = require('./routes/cpfRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/cpf', cpfRoutes);

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'CPF Validator API online'
  });
});

module.exports = app;
