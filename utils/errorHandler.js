const { ERROR_CODES_STATUS, ERROR_MESSAGES } = require('../utils/constants')

/**
 * Define Errors and response structure
 * @param {*} error
 * @returns {
 *    code: string
 *    msg: string
 *    records: [{}]
 * }
 */
const validationError = (error) => ({
  code: ERROR_CODES_STATUS.VALIDATION_ERROR,
  msg: ERROR_MESSAGES.VALIDATION_ERROR,
  records: [],
  error,
})

const internalServerError = (error) => ({
  code: ERROR_CODES_STATUS.INTERNAL_SERVER_ERROR,
  msg: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
  records: [],
  error,
})

const successResponse = (records = []) => ({
  code: ERROR_CODES_STATUS.SUCCESS,
  msg: ERROR_MESSAGES.SUCCESS,
  records,
})

const notFoundError = () => ({
  code: ERROR_CODES_STATUS.NOT_FOUND,
  msg: ERROR_MESSAGES.NOT_FOUND,
})

module.exports = {
  validationError,
  internalServerError,
  successResponse,
  notFoundError,
}
