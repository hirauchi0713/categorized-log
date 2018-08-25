const cl = require('./categorized-log')
const obj = { foo: 'foo', bar: 'bar' }
const arr = [ 0, 1, 2, 3, obj ]

function doAll(logger) {
  console.log(logger.category, logger.level)
  logger.fatal('fatal msg', arr)
  logger.error('error msg', arr)
  logger.warn ('warn msg' , arr)
  logger.info ('info msg' , arr)
  logger.debug('debug msg', arr)
  logger.trace('trace msg', arr)
}

doAll(cl())
doAll(cl('test'))
doAll(cl('model/DB'))
doAll(cl('model/Mail'))
doAll(cl('csev1'))
doAll(cl('csev2'))
doAll(cl('csev3'))