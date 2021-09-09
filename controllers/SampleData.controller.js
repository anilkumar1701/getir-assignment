const httpStatus = require('http-status')
const logger = require('../utils/logger')

const {
  internalServerError,
  successResponse,
} = require('../utils/errorHandler')
const service = require('.././services/SampleData.service')

// fn used to getch records based on filters and request payload provided
exports.getRecordLists = async (req, res) => {
  try {
    const recordsData = await service.fetchRecords(req.body)
    return res.status(httpStatus.OK).send(successResponse(recordsData))
  } catch (err) {
    logger.log.error(`Internal Server Error ${err}`)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(internalServerError(err))
  }
}
