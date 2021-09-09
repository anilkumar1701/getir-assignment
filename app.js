const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

/**
 * Set Security Headers
 */
app.use(helmet())

/**
 * Parse json request body
 */
app.use(express.json())

/**
 * Parse urlencoded request body
 */
app.use(express.urlencoded({ extended: true }))

/**
 * Enabling Cors
 */
app.use(cors())
app.options('*', cors())

const route = require('./startup/routes')
app.use('/getir_case_study', route)

module.exports = app
