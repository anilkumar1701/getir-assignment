const Joi = require('@hapi/joi')
const httpStatus = require('http-status')

const { validationError } = require('../utils/errorHandler')

/**
 * compares request with schema
 * @param {*} schema
 * @returns validationError || next()
 */
const validateSchema = (schema) => (req, res, next) => {
  const { value, error } = Joi.compile(schema.body)
    .prefs({ errors: { label: 'key' } })
    .validate(req.body)

  if (error) {
    let errorMessage = error.message

    errorMessage =
      error.details &&
      error.details.map((details) => details.message).join(', ')

    return res.status(httpStatus.BAD_REQUEST).send(validationError(errorMessage))
  }

  Object.assign(req, value)
  return next()
}

module.exports = validateSchema
