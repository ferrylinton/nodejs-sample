const fs = require('fs');

exports.isDirectory = (path) => {
    return fs.statSync(path).isDirectory()
}