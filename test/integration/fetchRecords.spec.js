require('dotenv').config()
const request = require('supertest')
const httpStatus = require('http-status')
const app = require('../../app')
const { ERROR_MESSAGES } = require('../../utils/constants')

const mongoCon = require('../../startup/mongoDB')

describe('Get Records Unit Tests', () => {
  beforeAll(async () => {
    await mongoCon.connect(process.env.MONG_DB_URI)
  })

  afterAll(async () => {
    await mongoCon.disconnect()
  })

  test('Should return the records depending on filters', async () => {
    const res = await request(app)
      .post('/getir_case_study/fetch_records')
      .send({
        startDate: '2016-01-26',
        endDate: '2018-02-02',
        minCount: 2700,
        maxCount: 4000,
      })

    expect(res.statusCode).toEqual(httpStatus.OK)
    expect(res.body.code).toBe(0)
    expect(res.body.msg).toBe(ERROR_MESSAGES.SUCCESS)
  })

  afterAll(async () => {
    await mongoCon.disconnect()
  })
})
