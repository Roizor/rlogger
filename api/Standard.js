const Colors = require('./Color');
class Standard {
    static main(toLogOrNotToLog) {
        // will figure something better
        console.log(Colors.Reset+toLogOrNotToLog+Colors.Reset);
    }
}

module.exports = Standard;