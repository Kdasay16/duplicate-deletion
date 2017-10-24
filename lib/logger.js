'use strict'

module.exports = function createLogger(log = console.log) { //console.dir (json)
  return function logger(req, res, next){
    const output = `${}`
    const sourceCode = `${}`
    const changes = `${req.body}`

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
