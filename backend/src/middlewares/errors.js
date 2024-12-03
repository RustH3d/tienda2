const boom = require('@hapi/boom');

const BoomErrorsHandler = (err, req, res, next) => {
  if(err.isBoom) {
    const { payload } = err.output;

    return res.status(payload.statusCode).json(payload);
  }

  next(err);
}

const ServerErrorHandler = (err, req, res, next) => {
  return res.status(500).json({
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'Internal Server Error'
  });
}

module.exports = {
  BoomErrorsHandler,
  ServerErrorHandler
}