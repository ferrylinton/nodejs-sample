const { sum, divide} = require('./services/calculator-service');

/**
 * @constant {number}  sumResult - Sum results
 */
const sumResult = sum(1,2);
console.log('>>>>>>>>> 1 + 2 = ', sumResult);

/**
 * @constant {number}  divideResult - Division results
 */
const divideResult = divide(1,2);
console.log('>>>>>>>>> 1 / 2 = ', divideResult);
console.log('....exit\n\n');