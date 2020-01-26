import test from 'ava'

function sum(a: number | undefined, b: number | undefined) {
  if (a === undefined || b === undefined) {
    throw new Error()
  }

  return a + b
}

async function sumAsync(a: number, b: number) {
  return a + b
}

test.beforeEach(() => {
  console.log('I run before each test in the file')
})

test('sum: 2 + 3 = 5', t => {
  t.is(sum(2, 3), 5)
})

test('sum: works for negative numbers', t => {
  t.is(sum(-2, -3), -5)
})

test('sum: throws for undefined arguments', t => {
  t.throws(() => sum(undefined, 1))
})

test('sumAsync: 2 + 3 = 5', async t => {
  t.is(await sumAsync(2, 3), 5)
})
