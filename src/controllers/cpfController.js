const { validarCPF } = require('../services/cpfService');

function validar(req, res) {
  const { cpf } = req.query;

  if (!cpf) {
    return res.status(400).json({
      success: false,
      error: {
        message: 'CPF não informado'
      }
    });
  }

  const cpfLimpo = cpf.replace(/\D/g, '');
  const valido = validarCPF(cpfLimpo);

  return res.json({
    success: true,
    data: {
      cpf: cpfLimpo,
      valid: valido
    }
  });
}

module.exports = { validar };
