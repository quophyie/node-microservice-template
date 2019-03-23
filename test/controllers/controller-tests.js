const Code = require('code')
const expect = Code.expect
const sinon = require('sinon')
const sinonStubPromise = require('sinon-stub-promise')
sinonStubPromise(sinon)
const Initializer = require('../../app/initializer')
const controller = new Initializer()
const supertest = require('supertest-promised')(controller.getApp())

describe('Node Microservice Template Controller Tests', () => {

  beforeEach(() => {
    // Initializer.getLoggerAspect().disable()
    Initializer.getLoggerAspect().enable()

    // Disables the loggers from expecting the traceId to be provided / set for
    // every log statement
    Initializer.getLoggerAspect().setRequireTraceId(false)

    // Disables the loggers from expecting the event to be provided / set for
    // every log statement
    Initializer.getLoggerAspect().setRequireEvent(false)
  })

  it('should be dummy controller test', () => {

  })
})
