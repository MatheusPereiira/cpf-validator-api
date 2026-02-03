const AppError = require('../utils/AppError');
const validarCPF = require('../services/cpfService');

function validar(req, res, next) {
  try {
    const { cpf } = req.query;

    if (!cpf) {
      throw new AppError(
        'CPF não informado',
        400,
        'CPF_REQUIRED'
      );
    }

    const cpfLimpo = cpf.replace(/\D/g, '');

    if (!/^\d+$/.test(cpfLimpo)) {
      throw new AppError(
        'CPF contém caracteres inválidos',
        422,
        'CPF_FORMAT_INVALID'
      );
    }

    if (cpfLimpo.length !== 11) {
      throw new AppError(
        'CPF deve conter 11 dígitos',
        422,
        'CPF_LENGTH_INVALID'
      );
    }

    const valido = validarCPF(cpfLimpo);

    if (!valido) {
      throw new AppError(
        'CPF informado é inválido',
        422,
        'CPF_INVALID'
      );
    }

    return res.json({
      success: true,
      data: {
        cpf: cpfLimpo,
        valid: true
      }
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = { validar };
