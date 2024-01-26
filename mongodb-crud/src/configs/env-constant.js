const fs = require('fs');
const path = require('path');

/**
 * Loads .env file contents into process.env
 * @author ferrylinton
 * @module EnvirontmentVariable
 */

/**
 * Filename variable based on the NODE_ENV value
 * 1. NODE_ENV=production => .env.production
 * 2. NODE_ENV=development => .env.development
 * 3. NODE_ENV=test => .env.test
 */
const envFile = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || ''}`);

// throw error if envFile is not found
if (!fs.existsSync(envFile)) {
	throw new Error(`${envFile} is not found`);
}

// Loads .env file contents into process.env
require('dotenv').config({
	path: envFile,
});

exports.PORT = process.env.PORT || '5001';
exports.MONGODB_HOST = process.env.MONGODB_HOST || '127.0.0.1';
exports.MONGODB_PORT = process.env.MONGODB_PORT || '27017';
exports.MONGODB_AUTH_SOURCE = process.env.MONGODB_AUTH_SOURCE || 'admin';
exports.MONGODB_USERNAME = process.env.MONGODB_USERNAME || '';
exports.MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || '';
exports.MONGODB_DATABASE = process.env.MONGODB_DATABASE || '';
