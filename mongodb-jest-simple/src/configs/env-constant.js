const fs = require('fs');
const path = require('path');

const envFile = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || ''}`);

if (!fs.existsSync(envFile)) {
	throw new Error(`${envFile} is not found`);
}

require('dotenv').config({
	path: envFile,
});

module.exports = {
	PORT: process.env.PORT || '5001',
	MONGODB_HOST: process.env.MONGODB_HOST || '127.0.0.1',
	MONGODB_PORT: process.env.MONGODB_PORT || '27017',
	MONGODB_AUTH_SOURCE: process.env.MONGODB_AUTH_SOURCE,
	MONGODB_USERNAME: process.env.MONGODB_USERNAME,
	MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
	MONGODB_DATABASE: process.env.MONGODB_DATABASE,
};
