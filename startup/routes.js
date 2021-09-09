const express = require('express')
const validator = require('../middleware/validator')
const { requestSchema } = require('../validator/SampleData.validator')
const controller = require('../controllers/SampleData.controller')
const router = express.Router()

router.post(
  '/fetch_records',
  validator(requestSchema),
  controller.getRecordLists,
)

module.exports = router
