const { ObjectId } = require('mongodb');
const { getCollection } = require('../configs/mongodb');


/**
 * @typedef {Object} Todo
 * @property {string} _id - The Id
 * @property {string} task - The task
 * @property {boolean} done - The status of the task
 */

/**
 * @typedef {Object} InsertOneResult
 * @property {boolean} acknowledged - Indicates whether this write result was acknowledged.
 * @property {number} insertedId - The identifier that was inserted.
 */

/**
 * @typedef {Object} UpdateResult
 * @property {boolean} acknowledged - Indicates whether this write result was acknowledged.
 * @property {number} matchedCount - The number of documents that matched the filter
 * @property {number} modifiedCount - The number of documents that were modified
 * @property {number} upsertedCount - The number of documents that were upserted
 * @property {string} upsertedId - The identifier of the inserted document if an upsert took place
 */

/**
 * @typedef {Object} DeleteResult
 * @property {boolean} acknowledged - Indicates whether this write result was acknowledged.
 * @property {number} deletedCount - The number of documents that were deleted.
 */

/**
 * @const {string} Name of Todo Collection
 */
const TODO_COLLECTION = 'todo'

/**
 * Find multiple Todo documents
 * 
 * @returns Array of {@link Todo} documetns.
 * 
 */
const find = async () => {
    const todoCollection = await getCollection(TODO_COLLECTION);
    return todoCollection.find({done: false}).sort({ 'task': -1 }).toArray();
}

/**
 * Find a Todo document by ID
 * 
 * @param {string} _id - The ID of todo document
 * @returns A {@link Todo} document
 */
const findById = async (_id) => {
    const todoCollection = await getCollection(TODO_COLLECTION);
    return await todoCollection.findOne({ _id: new ObjectId(_id) });
}

/**
 * Create a new Todo document.
 * 
 * @param {Todo} todo - The new {@link Todo} data.
 * @returns Object of {@link InsertOneResult}
 */
const create = async (todo) => {
    const todoCollection = await getCollection(TODO_COLLECTION);
    return await todoCollection.insertOne(todo);
}

/**
 * Update a todo document in a collection
 * 
 * @param {string} _id - The ID of todo document
 * @param {Todo} todo - The new {@link Todo} data.
 * @returns Object of {@link UpdateResult}.
 */
const update = async (_id, todo) => {
    const todoCollection = await getCollection(TODO_COLLECTION);
    return await todoCollection.updateOne({ _id: new ObjectId(_id) }, { $set: todo });
}

/**
 * Delete a todo document from a collection.
 * 
 * @param {string} _id - The ID of todo document
 * @returns Object of {@link DeleteResult}.
 */
const deleteById = async (_id) => {
    const todoCollection = await getCollection(TODO_COLLECTION);
    return await todoCollection.deleteOne({ _id: new ObjectId(_id) });
}

module.exports = {
    find,
    findById,
    create,
    update,
    deleteById
};