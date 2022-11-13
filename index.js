const Error = require('./api/Error');
const Warn = require('./api/Warn');
const Standard = require('./api/Standard');

module.exports = {
    err: Error.main,
    warn: Warn.main,
    log: Standard.main
}