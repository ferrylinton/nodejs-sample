const todoServcie = require('./services/todo-service');

async function run() {
	const todoes = await todoServcie.find();
	console.log('>>> todoService.find()');
	console.log(todoes);
}

function close() {
	setTimeout(function () {
		process.exit();
	}, 1000);
}

run().catch(console.dir).finally(close);
