const { getCollection } = require('../configs/mongodb');

const TODO_COLLECTION = 'todo';

const find = async () => {
	const todoCollection = await getCollection(TODO_COLLECTION);
	return todoCollection.find().toArray();
};

module.exports = {
	find,
};
