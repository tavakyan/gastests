function pass(func) {
  Logger.log(func.name + ' passed.')
  return true
}

function fail(func, msg) {
  Logger.log(func.name + ' failed.')
  return false
}

// Given the result of a function log and return either a pass or fail.  
function assert(result, func, message) {
  return result ? pass(func) : fail(func, message)
}

// Create a list of global functions.
function globalFunctions() {
  const context = this
  const globalValues = underscoreGS._values(context)
  const result = underscoreGS._filter(globalValues, function(globalValue) {
    return underscoreGS._isFunction(globalValue)
  })
  return result
}

// Test globalFunctions() behavior
function testGlobalFunctions() {
  const result = underscoreGS._all(globalFunctions(), function(func) { 
    return underscoreGS._isFunction(func)
  })
  return result
}

// Create a list of global functions which have names that start with "test"
function globalTestFunctions() {
  // pass context into globalFunctions? 
  const globalFuncs = globalFunctions()
  const result = underscoreGS._filter(globalFuncs, function(globalFunc) {
    const funcName = globalFunc.name
    const token = "test"
    return funcName.substring(0, token.length) === token
  })
  return result
}

// Test globalTestFunctions() behavior
function testGlobalTestFunctions() {
  const result = underscoreGS._all(globalTestFunctions(), function(testFunc) {
    const funcName = testFunc.name
    const token = "test"
    return funcName.substring(0, token.length) === token
  })
  return result
}

// Run all test functions
function runTests() {
  const testFunctions = globalTestFunctions()
  const result = underscoreGS._all(testFunctions, function(testFunction) {
    const funcResult = testFunction()
    return assert(funcResult, testFunction, testFunction.name + ' failed.')
  })
  if (result) {
    Logger.log('All tests passed.')
  } else {
    Logger.log('Some failed tests.')
  }
  return result
}
