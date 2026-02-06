const { validarCPF } = require('../src/services/cpfService');

describe('cpfService - validarCPF (teste unitário)', () => {

  test('deve retornar true para CPF válido', () => {
    const cpf = '12345678909';
    const resultado = validarCPF(cpf);
    expect(resultado).toBe(true);
  });

  test('deve retornar false para CPF com todos os dígitos iguais', () => {
    const cpf = '11111111111';
    const resultado = validarCPF(cpf);
    expect(resultado).toBe(false);
  });

  test('deve retornar false para CPF com dígito verificador inválido', () => {
    const cpf = '12345678900';
    const resultado = validarCPF(cpf);
    expect(resultado).toBe(false);
  });

  test('deve retornar false para CPF com tamanho incorreto', () => {
    const cpf = '123';
    const resultado = validarCPF(cpf);
    expect(resultado).toBe(false);
  });

});
