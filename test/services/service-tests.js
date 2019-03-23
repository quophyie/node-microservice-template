const Code = require('code')
const expect = Code.expect
const sinon = require('sinon')
const sinonStubPromise = require('sinon-stub-promise')
sinonStubPromise(sinon)
const Initializer = require('../../app/initializer')

describe('Node Microservice Template Service Tests', () => {
  beforeEach(() => {
    // Disable the aspect logger so that we dont engage the MDC when log methods are
    // called in the services as that would require us to provide the traceId and event
    // which we  cannot easily inject
    Initializer.getLoggerAspect().disable()
  })

  it('should be dummy service test', () => {

  })
})
