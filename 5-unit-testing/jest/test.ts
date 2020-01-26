function sum(a: number | undefined, b: number | undefined) {
  if (a === undefined || b === undefined) {
    throw new Error()
  }

  return a + b
}

async function sumAsync(a: number, b: number) {
  return a + b
}

describe('sum', () => {
  beforeEach(() => {
    console.log('I run before each test in the group')
  })

  it('2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('works for negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5)
  })

  it('throws for undefined arguments', () => {
    expect(() => sum(undefined, 1)).toThrowError()
  })
})

describe('sumAsync', () => {
  it('2 + 3 = 5', async () => {
    expect(await sumAsync(2, 3)).toBe(5)
  })
})
