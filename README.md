# gastests
Google App Scripts Test Runner

## Installing

Either copy contents of Test.gs file into your project or create a GAS library and import it.  

## Creating and running tests

1. First write the unit test function which is any function that begins with "test"

```javascript
// Test functions should return true for a pass or false for a fail.
function testSquare() {
  const input = 10
  const expectedOutput = 100
  const actualOutput = square(input)
  return expectedOutput === actualOutput
}
```
  
2. Write the function.

```javascript
function square(input) {
  return input * input  
}
```
  
3. Execute runAll()
