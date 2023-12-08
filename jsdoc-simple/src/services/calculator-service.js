/**
 * Provides a simple calculation process
 * @module CalculatorService
 */

/**
 * Sum two numbers
 * @param {number} a - A number to add
 * @param {number} b - A number to add
 * @returns {number} The sum of a and b
 */
exports.sum = (a, b) => {
	return a + b;
}

/**
 * Divides two numbers
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The quotient of a and b
 * @throws {Error} If b is zero
 */
exports.divide = (a, b) => {
	if (b === 0) {
		throw new Error('Cannot divide by zero')
	}
	return a / b
}
