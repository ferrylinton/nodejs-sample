import fs from 'fs';

export const isDirectory = (path) => {
    return fs.statSync(path).isDirectory()
}