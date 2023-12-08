const { createRandomUser } = require('./services/user-service');
const { writeData, readData } = require('./services/json-service');

async function run() {
	console.log('>>> json-file');
	//console.log(createRandomUser());
	await writeData(createRandomUser());
	//const data = await readData();
	//console.log(data);
}

run().catch(console.dir);
