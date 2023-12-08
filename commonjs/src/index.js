const { isDirectory } = require('./services/file-service.js');

const result = isDirectory(process.cwd());
console.log('result : ', result);