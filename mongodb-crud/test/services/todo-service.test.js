const todoService = require('../../src/services/todo-service');
const assert = require('assert');
const { startMongoServer, stopMongoServer } = require('../libs/mongo-test-util');

beforeAll(async () => {
	await startMongoServer();
});

afterAll(async () => {
	await stopMongoServer();
});

describe('todoService', () => {
	let _id = null;

	test('find all data', async () => {
		const todoes = await todoService.find();
		assert.strictEqual(todoes.length, 0);
	});

	test('create new task', async () => {
		const result = await todoService.create('Create node application');
		_id = result.insertedId.toHexString();
		assert.equal(result.acknowledged, true);

		const todoes = await todoService.find();
		assert.equal(todoes.length, 1);
	});

	test('find data by id', async () => {
		const todo = await todoService.findById(_id);
		assert.equal(todo._id, _id);
	});

	test('update data by id', async () => {
		const result = await todoService.update(_id, { done: true });
		assert.equal(result.modifiedCount, 1);

		const todo = await todoService.findById(_id);
		assert.equal(todo.done, true);
	});

	test('delete data by id', async () => {
		const result = await todoService.deleteById(_id);
		assert.equal(result.deletedCount, 1);

		const todo = await todoService.findById(_id);
		assert.equal(todo, null);
	});
});
