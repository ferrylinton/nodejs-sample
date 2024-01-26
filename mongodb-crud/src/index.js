const todoService = require('./services/todo-service');

async function main() {
	try {
		// const create = await todoService.create('Crete node application');
		// console.log(create);
		// const find = await todoService.find();
		// console.log(find);
		// const findById = await todoService.findById('65768c6ac1c63a8c1cd44a22');
		// console.log(findById);
		// const update = await todoService.update('65768c6ac1c63a8c1cd44a22', { done: true });
		// console.log(update);
		// const deleteById = await todoService.deleteById('65768c6ac1c63a8c1cd44a22');
		// console.log(deleteById);
	} finally {
		console.log('[APP] exit after 1 second');
		setTimeout(function () {
			process.exit();
		}, 1000);
	}
}

main().catch(console.dir);
