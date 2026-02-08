module.exports = (err, req, res, next) => {
  const isDev = process.env.NODE_ENV === 'development';

  // Erro esperado (AppError)
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      error: {
        code: err.code,
        message: err.message
      }
    });
  }

  // Erro inesperado (bug)
  if (isDev) {
    console.error('Erro inesperado:', err);

    return res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: err.message,
        stack: err.stack
      }
    });
  }

  // Produção: resposta limpa
  console.error(err);

  return res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Erro interno do servidor'
    }
  });
};
