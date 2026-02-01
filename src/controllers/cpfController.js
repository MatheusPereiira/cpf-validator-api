const { validarCPF } = require('../services/cpfService');

function validar(req, res) {
  const { cpf } = req.query;

  // CPF não informado
  if (!cpf) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'CPF_REQUIRED',
        message: 'CPF não informado'
      }
    });
  }

  // CPF com caracteres inválidos
  if (!/^[\d.\-]+$/.test(cpf)) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'CPF_FORMAT_INVALID',
        message: 'CPF contém caracteres inválidos'
      }
    });
  }

  const resultado = validarCPF(cpf);

  if (!resultado.valid) {
    return res.status(422).json({
      success: false,
      error: resultado.error
    });
  }

  return res.json({
    success: true,
    data: {
      cpf: resultado.cpf,
      valid: true
    }
  });
}

module.exports = {
  validar
};
