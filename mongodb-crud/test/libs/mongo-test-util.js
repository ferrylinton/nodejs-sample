const { MONGODB_DATABASE, MONGODB_PORT } = require('../../src/configs/env-constant');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { getMongoClient } = require('../../src/configs/mongodb');

// Create an Mongo-Memory-Sever Instance
const mongoServer = new MongoMemoryServer({
	instance: {
		port: parseInt(MONGODB_PORT),
		dbName: MONGODB_DATABASE,
	},
});

// Start the Mongod Instance
exports.startMongoServer = async () => {
	try {
		await mongoServer.start(true);
		console.log(`mongoServer starting on ${mongoServer.getUri()}`);
	} catch (error) {
		console.log(error);
	}
};

exports.stopMongoServer = async () => {
	try {
		const connection = await getMongoClient();
		if (connection) {
			// Close the client and its underlying connections
			connection.close();
		}

		// Stop the current In-Memory Instance
		await mongoServer.stop();
	} catch (error) {
		console.log(error);
	}
};
