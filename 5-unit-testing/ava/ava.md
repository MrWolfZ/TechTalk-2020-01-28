## AVA

### Highlights

- widely used
- isolated & concurrent test execution
- watch mode only re-runs tests affected by change
- no pollution of global namespace
- snapshot testing
- command line parameter support
- excellent assertion output

### Lowlights

- no grouping for hooks
- can be slow (especially for larger sync test suites)
- no module mocking

### Use when:

- you do not like global static values
- you have many small async tests
- you want a simple, minimalist library
