const Colors = require('./Color');

class Warn {
    static main(toLogOrNotToLog) {
        // will figure something better
        console.warn(Colors.Reset+Colors.FgYellow+toLogOrNotToLog+Colors.Reset);
    }
}

module.exports = Warn;