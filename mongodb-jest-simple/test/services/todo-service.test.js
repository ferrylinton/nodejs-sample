const todoService = require('../../src/services/todo-service');
const assert = require('assert');
const { startMongoServer, stopMongoServer } = require('../libs/mongo-test-util');

beforeAll(async () => {
	await startMongoServer();
});

afterAll(async () => {
	await stopMongoServer();
});

test('find all data', async () => {
	const todoes = await todoService.find();
	assert.strictEqual(todoes.length, 0);
});