'use strict'

module.exports = function createLogger(log = console.log) {
  return function logger(req, res, next){
    const output = `${}`
    const sourceCode = `${}`
    const changes = `${}`

    log(output, sourceCode, changes)
    next()
  }
}
// module.exports = function createLogger(log = console.log) {
//
//     return function logger(req, res, next) {
//         const message = `${req.method} ${req.url}`;
//         log(message);
//         next();
//     };
