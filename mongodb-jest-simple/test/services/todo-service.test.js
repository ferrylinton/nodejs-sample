const { MONGODB_DATABASE, MONGODB_PORT } = require('../../src/configs/env-constant');
const { find } = require('../../src/services/todo-service');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { getMongoClient } = require('../../src/configs/mongodb');
const assert = require('assert');


let mongoServer;

beforeAll(async () => {
  try {
    mongoServer = new MongoMemoryServer({
      instance: {
        port: parseInt(MONGODB_PORT),
        dbName: MONGODB_DATABASE
      }
    })


    await mongoServer.start(true);
    console.log(`mongoServer starting on ${mongoServer.getUri()}`);
  } catch (error) {
    console.log(error);
  }

});

afterAll(async () => {
  try {
    const connection = await getMongoClient();
    if (connection) {
      connection.close();
    }

    if (mongoServer) {
      await mongoServer.stop();
    }
  } catch (error) {
    console.log(error);
  }

});

describe('todoService.find()', () => {

  test('todoes should be an empty array', async () => {
    const todoes = await find();
    assert.strictEqual(todoes.length, 0);
  });
  
})


