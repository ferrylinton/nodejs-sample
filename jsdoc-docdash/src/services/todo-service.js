const { v4: uuidv4 } = require('uuid');
const { read, writeOrAppend, rewrite } = require('./file-service');

/**
 * A service that handles CRUD operations of Todo's data
 * @author ferrylinton
 * @module TodoService
 */

/**
 * @typedef {import('./typedefs.js').Todo} Todo
 */

/**
 * @constant {string[]} columns - Column's names of Todo's csv file
 */
const columns = ["id", "task", "done", "createdAt", "updatedAt"];

/**
 * @constant {string} filename - The name of the file where the data is stored
 */
const filename = 'todoes.csv';

/**
 * Find multiple Todo datas
 * @function list
 * @returns {Promise<Todo[]>} Array of {@link Todo}.
 */
exports.find = () => {
	return read(columns, filename);
};

/**
 * Find a Todo data by ID
 * @param {string} id - The ID of todo data
 * @returns {Promise<Todo|null>} A {@link Todo} data
 */
exports.findById = id => new Promise((resolve, reject) => {
	if (id) {
		read(columns, filename)
			.then(todoes => {
				const index = todoes.findIndex(obj => obj.id === id);
				if (index !== -1) {
					resolve(todoes[index]);
				}else{
					resolve(null);
				}
			})
			.catch(error => reject(error));

	} else {
		resolve(null);
	}
});

/**
 * Create a new Todo data.
 * @param {string} task - The task.
 * @returns {Todo} Object of {@link Todo}
 * @throws {Error} If task is null or empty
 */
exports.create = task => {
	if (!task || task.trim() === '') {
		throw new Error('Invalid task');
	}

	const todo = {
		id: uuidv4(),
		task,
		done: false,
		createdAt: new Date(),
		updatedAt: null
	};

	writeOrAppend(todo, columns, filename);
	return todo;
};

/**
 * Update a todo data
 * @param {string} id - The ID of todo data
 * @param {Todo} todo - The new {@link Todo} data.
 * @returns {Promise<Todo>} Object of {@link Todo}.
 */
exports.update = (id, { task, done }) => new Promise(async (resolve, reject) => {
	if (id) {
		let todoes = await read(columns, filename);
		const index = todoes.findIndex(obj => obj.id === id);

		if (index !== -1) {
			const updatedAt = new Date();
			const todo = { ...todoes[index], task, done, updatedAt };

			todoes = [
				...todoes.slice(0, index),
				todo,
				...todoes.slice(index + 1),
			];
			rewrite(columns, todoes, filename)
			resolve(todo);
		}else{
			reject('Not found')
		}
	} else {
		reject('Not found')
	}
});

/**
 * Delete a todo data.
 * @param {string} id - The ID of todo data
 * @returns {Promise<void>}
 */
exports.deleteById = async id => new Promise(async (resolve, reject) => {
	if (id) {
		let todoes = await read(columns, filename);
		const index = todoes.findIndex(obj => obj.id === id);

		if (index !== -1) {
			todoes.splice(index, 1);
			rewrite(columns, todoes, filename)
			resolve()
		} else {
			reject('Not found')
		}
	}else{
		reject('Not found')
	}
});