const { validarCPF } = require('../services/cpfService');

function validar(req, res) {
  const { cpf } = req.query;

  if (!cpf) {
    return res.status(400).json({
      status: 'error',
      message: 'CPF não informado'
    });
  }

  const valido = validarCPF(cpf);

  return res.json({
    status: 'ok',
    cpf,
    valido
  });
}

module.exports = { validar };
