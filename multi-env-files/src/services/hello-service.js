const { APP_USERNAME, NODE_ENV } = require('../configs/env-constant');

function sayHello() {
	return `Hello ${APP_USERNAME} on ${NODE_ENV} mode`;
}

module.exports = {
	sayHello,
};
