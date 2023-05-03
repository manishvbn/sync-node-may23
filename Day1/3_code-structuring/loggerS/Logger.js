let instance = null;

class Logger {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    log(message) {
        console.log(`${message}, logged using Logger Class log method.`);
    }
}

module.exports = new Logger();