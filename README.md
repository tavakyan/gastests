# gastests
Google App Scripts Test Runner

1. First write the unit test function which is any function that begins with "test"

```javascript
// Test functions should also true for a pass or false for a fail.
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
