const { MONGODB_DATABASE, MONGODB_PORT } = require('../../src/configs/env-constant');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { getMongoClient } = require('../../src/configs/mongodb');

const mongoServer = new MongoMemoryServer({
	instance: {
		port: parseInt(MONGODB_PORT),
		dbName: MONGODB_DATABASE,
	},
});

const startMongoServer = async () => {
	try {
		await mongoServer.start(true);
		console.log(`mongoServer starting on ${mongoServer.getUri()}`);
	} catch (error) {
		console.log(error);
	}
};

const stopMongoServer = async () => {
	try {
		const connection = await getMongoClient();
		if (connection) {
			connection.close();
		}

		await mongoServer.stop();
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	startMongoServer,
	stopMongoServer,
};
