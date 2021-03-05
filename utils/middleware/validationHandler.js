const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(data, schema) {
  const { error } = joi.object(schema).validate(data);
  return error;
}

function validationHandler(schema, check = 'body') {
  return function (req, res, next) {
    const error = validate(req[check], schema);
    // From the docs: If you pass anything to the next() function (except the string 'route'),
    // Express regards the current request as being an error and will skip any remaining
    // non-error handling routing and middleware functions.
    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validationHandler;
