function validarCPF(cpf) {
  // Remove tudo que não for número
  const cpfLimpo = cpf.replace(/\D/g, '');

  // CPF deve ter 11 dígitos
  if (cpfLimpo.length !== 11) {
    return {
      valid: false,
      error: {
        code: 'CPF_LENGTH_INVALID',
        message: 'CPF deve conter 11 dígitos'
      }
    };
  }

  // Bloqueia CPFs com todos os dígitos iguais
  if (/^(\d)\1{10}$/.test(cpfLimpo)) {
    return {
      valid: false,
      error: {
        code: 'CPF_INVALID',
        message: 'CPF informado é inválido'
      }
    };
  }

  // Validação matemática
  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.substring(9, 10))) {
    return {
      valid: false,
      error: {
        code: 'CPF_INVALID',
        message: 'CPF informado é inválido'
      }
    };
  }

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.substring(10, 11))) {
    return {
      valid: false,
      error: {
        code: 'CPF_INVALID',
        message: 'CPF informado é inválido'
      }
    };
  }

  return {
    valid: true,
    cpf: cpfLimpo
  };
}

module.exports = {
  validarCPF
};
