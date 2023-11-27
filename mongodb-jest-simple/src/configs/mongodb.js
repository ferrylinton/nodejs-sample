const { MongoClient } = require('mongodb');
const { MONGODB_AUTH_SOURCE, MONGODB_DATABASE, MONGODB_PASSWORD, MONGODB_HOST, MONGODB_PORT, MONGODB_USERNAME } = require('./env-constant');

let mongoClient;

const getMongoClientInstance = () => {
    const mongoClientOptions = {
        authMechanism: "DEFAULT",
        authSource: MONGODB_AUTH_SOURCE,
        monitorCommands: true,
        auth: {
            username: MONGODB_USERNAME,
            password: MONGODB_PASSWORD
        }
    };

    const mongodbURL = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}`;
    const instance = process.env.NODE_ENV === 'test' ? new MongoClient(mongodbURL) : new MongoClient(mongodbURL, mongoClientOptions);
    
    instance.on('connectionPoolCreated', (event) => console.log(`[MONGODB] ${JSON.stringify(event)}`));
    instance.on('connectionPoolReady', (event) => console.log(`[MONGODB] ${JSON.stringify(event)}`));
    instance.on('connectionCreated', (event) => console.log(`[MONGODB] ${JSON.stringify(event)}`));
    instance.on('connectionClosed', (event) => console.log(`[MONGODB] ${JSON.stringify(event)}`));

    return instance;
}

const getMongoClient = async () => {
    if (mongoClient === null || mongoClient === undefined) {
        try {
            mongoClient = getMongoClientInstance().connect();
        } catch (error) {
            mongoClient = null;
            console.log(error);
        }

        return mongoClient;
    }

    return mongoClient;
}

const getCollection = async (name) => {
    const connection = await getMongoClient();

    if (connection) {
        const db = connection.db(MONGODB_DATABASE);
        return db.collection(name);
    } else {
        throw new Error('No mongodb connection');
    }

}

module.exports = {
    getMongoClient,
    getCollection
};