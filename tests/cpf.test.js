const request = require('supertest');
const app = require('../src/app');

describe('CPF Validation API', () => {

  test('Deve retornar sucesso para CPF válido', async () => {
    const response = await request(app)
      .get('/cpf/validate?cpf=123.456.789-09');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.valid).toBe(true);
  });

  test('Deve retornar erro quando CPF não for informado', async () => {
    const response = await request(app)
      .get('/cpf/validate');

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe('CPF_REQUIRED');
  });

  test('Deve retornar erro para CPF inválido', async () => {
    const response = await request(app)
      .get('/cpf/validate?cpf=111.111.111-11');

    expect(response.status).toBe(422);
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe('CPF_INVALID');
  });

  test('Deve retornar erro para CPF com caracteres inválidos', async () => {
    const response = await request(app)
      .get('/cpf/validate?cpf=abc');

    expect(response.status).toBe(422); // ← ALINHADO COM O CONTROLLER
    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe('CPF_FORMAT_INVALID');
  });

});
