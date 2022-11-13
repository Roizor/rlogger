const Colors = require('./Color');

class Error {
    static main(toLogOrNotToLog) {
        // will figure something better
        console.error(Colors.Reset+Colors.FgRed+toLogOrNotToLog+Colors.Reset);
    }
}

module.exports = Error;