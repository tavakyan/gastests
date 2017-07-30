# gastests
Google App Scripts Test Runner

1. Write the unit test function.  

```javascript
// Note: Unit test function name must begin with "test" and return truthy condition for a pass.
function testSquare() {
  const input = 10
  const expectedOutput = 100
  const result = expectedOutput === square(input)
  return result
}
```
  
2. Write the function.

```javascript
function square(input) {
  return input * input  
}
```
  
3. Execute runAll()
