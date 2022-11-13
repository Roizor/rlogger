const Colors = require('./Color');

class Fatal {
    static main(toLogOrNotToLog) {
        // will figure something better
        console.error(Colors.Reset+Colors.FgRed+"[FATAL] "+toLogOrNotToLog+Colors.Reset);
        process.exit(0);
    }
}

module.exports = Fatal;