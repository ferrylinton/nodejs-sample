const fs = require('fs');
const path = require('path');

/**
 * Creates a file name based on the NODE_ENV value
 * 1. NODE_ENV=production => .env.production
 * 2. NODE_ENV=development => .env.development
 * 3. NODE_ENV=test => .env.test
 */
const envFile = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || ''}`);

// throw error if envFile is not found
if (!fs.existsSync(envFile)) {
	throw new Error(`${envFile} is not found`);
}

// loads environment variables
require('dotenv').config({
	path: envFile,
});

module.exports = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	APP_USERNAME: process.env.APP_USERNAME,
};
