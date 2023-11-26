const { sum } = require('../src/calculator');

// name
test('adds 1 + 2 to equal 3', () => { 

  // executes the function to be tested
  const result = sum(1, 2);  
  
  // check the result
  expect(result).toBe(3);
          
});