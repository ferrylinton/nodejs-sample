const { sayHello } = require('../../src/services/hello-service');

test('sayHello', () => {
	const result = sayHello();
	console.log(result);
	expect(result).toBe('Hello user_test on test mode');
});
