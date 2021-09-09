require('dotenv').config()
const app = require('./app')

const logger = require('./utils/logger')
const mongoCon = require('./startup/mongoDB')

//declaring port for server to listen on
const port = process.env.PORT || 3001
const mongoDBURL = process.env.MONG_DB_URI

const server = app.listen(port, async () => {
  logger.log.info(`Server Listening on PORT : ${port}`)
  await mongoCon.connect(mongoDBURL)
})

// listen exceptions
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.log.info('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error) => {
  logger.log.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

/**
 * This will gracefuly close server
 */
process.on('SIGTERM', () => {
  logger.log.info('SIGTERM received')
  if (server) {
    server.close()
  }
})
