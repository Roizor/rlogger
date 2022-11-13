const Error = require('./api/Error');
const Warn = require('./api/Warn');
const Standard = require('./api/Standard');
const Fatal = require('./api/Fatal');

module.exports = {
    err: Error.main,
    warn: Warn.main,
    log: Standard.main,
    die: Fatal.main
}