const { find } = require('./services/todo-service');

async function run() {
	try {
		const movie = await find();
		console.log(movie);
	} catch (error) {
		console.log(error);
	} finally {
		setTimeout(function () {
			process.exit();
		}, 1000);
	}
}

run().catch(console.dir);
