'use strict'
/**
const sharedGlobals = require('./lib/shared-globals')
if (process.env.NODE_ENV !== 'test') {
  sharedGlobals.DB = Object.freeze(require('./../schemas/index')({
    DATABASE_URL: process.env.DATABASE_URL
  }))
} */
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const enrouten = require('express-enrouten')
const logger = require('../logger').logger
const loggerExpress = require('../logger').loggerExpress
const errorrMiddleware = require('quantal-errors').expressErrorMiddleware
const AppErrors = require('../exceptions')
const mappings = []

class Initializer {
  /**
   * Initializes and starts the microservice
   */
  constructor () {
    this.port = Number(process.env.PORT) ? process.env.PORT : 3000
    this.app = app
    this.app.use(loggerExpress(logger))
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(cookieParser())
    this.app.use(enrouten({ directory: './../controllers' }))
    this.app.listen(this.port, () => logger.getMdc().run(() => logger.info(`Listening on port ${this.port}`)))
    // Custom errors and error mappings
    this.app.use(errorrMiddleware(AppErrors, mappings))
  }

  getApp () {
    return this.app
  }

  getPort () {
    return this.port
  }

  getRouter () {
    return this.router
  }
}

module.exports = Initializer