const fs = require('fs');
const { join } = require('path');
const Papa = require("papaparse");

/**
 * A service that handles Read And Write operations of csv file
 * @author ferrylinton
 * @module FileService
 */

/**
 * @constant {string} newline - The character used to determine newline sequence.
 */
const newline = "\r\n";

/**
 * Checks whether the file contains data
 * @param {string} filename - Filename 
 * @returns {boolean}
 */
const isDataExist = (filename) => {
    const folder = join(process.cwd(), 'data');
    const path = join(process.cwd(), 'data', filename);

    // check if data folder is exist
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }

    // check if file is exist
    if (fs.existsSync(join(folder, filename))) {
        const data = fs.readFileSync(path, "utf8");
        return data ? true : false;
    }

    return false;
}

/**
 * 
 * @param {Object} row - Key/value pairs of the fields
 * @param {string[]} columns - CSV's header
 * @param {string} filename - The filename
 */
exports.writeOrAppend = (row, columns, filename) => {
    const path = join(process.cwd(), 'data', filename);
    if (isDataExist(filename)) {
        const csv = Papa.unparse([row], { header: false, columns });
        fs.appendFileSync(path, newline + csv);
    } else {
        const csv = Papa.unparse([row], { columns });
        fs.writeFileSync(path, csv);
    }
}

/**
 * Read data from CSV's file
 * @param {string[]} columns - CSV's header
 * @param {string} filename - The filename
 * @returns {Object} Key/value pairs of the fields
 */
exports.read = (columns, filename) => new Promise((resolve, reject) => {
    const datas = [];
    const path = join(process.cwd(), 'data', filename);
    fs.createReadStream(path)
        .pipe(Papa.parse(Papa.NODE_STREAM_INPUT, { header: true, columns }))
        .on("error", (error) => {
            reject(error)
        })
        .on("data", (row) => {
            datas.push(row);
        })
        .on("end", () => {
            resolve(datas)
        });
});

/**
 * Replace all data in CSV's file
 * @param {string[]} columns - CSV's header
 * @param {Object} rows - The array of key/value pairs of the fields
 * @param {string} filename 
 */
exports.rewrite = (columns, rows, filename) => {
    const path = join(process.cwd(), 'data', filename);
    const content = Papa.unparse(rows, { columns });
    fs.writeFileSync(path, content, { encoding: 'utf8', flag: 'w' });
}