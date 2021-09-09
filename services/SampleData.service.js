const logger = require('../utils/logger')
const SampleData = require('../models/SampleData.model')

// being used to fetch records on request of payload in array
const fetchRecords = async ({ startDate, endDate, minCount, maxCount }) => {
  try {
    return await SampleData.aggregate([
      {
        $project: {
          key: 1,
          createdAt: 1,
          totalCount: { $sum: '$counts' },
          _id: 0,
        },
      },
      {
        $match: {
          createdAt: { $gte: new Date(startDate), $lt: new Date(endDate) },
          totalCount: { $gte: minCount, $lte: maxCount },
        },
      },
    ])
  } catch (err) {
    logger.log.error(`error in service ,${err}`)
    throw err
  }
}

module.exports = { fetchRecords }
