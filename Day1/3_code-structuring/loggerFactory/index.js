// exports.DBLFactory = {
//     getLogger: function () {
//         const DBLogger = require('./db-logger');
//         return new DBLogger();
//     }
// };

// exports.FLFactory = {
//     getLogger: function () {
//         const FileLogger = require('./file-logger');
//         return new FileLogger();
//     }
// };

exports.DBLFactory = class {
    static getLogger() {
        const DBLogger = require('./db-logger');
        return new DBLogger();
    }
}

exports.FLFactory = class {
    static getLogger() {
        const FileLogger = require('./file-logger');
        return new FileLogger();
    }
}