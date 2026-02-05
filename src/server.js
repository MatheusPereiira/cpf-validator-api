const app = require('./app');

const PORT = process.env.PORT || 3333;

// Evita subir servidor durante testes
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}
