const originalConsoleError = console.error
const ignoreRegex = /(ReactTestUtils has been moved to react-dom|Shallow renderer has been moved to react-test-renderer)/

console.error = function (message) {
  if (typeof message === 'string' && ignoreRegex.test(message)) {
    return
  }
  return originalConsoleWarn.apply(this, arguments)
}
