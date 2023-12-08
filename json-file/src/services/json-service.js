const { writeJson, readJson } = require('fs-extra');
const { join } = require('path');

const path = join(process.env.ROOT_DIR || process.cwd(), 'jsons', 'users.json');

async function readData() {
    return await readJson(path);
}

async function writeData(data) {
    return await writeJson(path, data);
}

module.exports = {
    readData,
    writeData
}