import helloWorld from '../src/libs/helloWorld'

describe('helloWorld.ts', () => {
  test('Illegal options type', () => {
    expect(() => {
      helloWorld(undefined)
    }).toThrow('The options must be an Object.')
  })
})

describe('helloWorld.ts', () => {
  test('Empty content', () => {
    expect(() => {
      helloWorld({
        action: '',
        name: 'World',
      })
    }).toThrow('The "action" option must be not empty.')
  })
})

describe('helloWorld.ts', () => {
  test('Empty content', () => {
    expect(() => {
      helloWorld({
        action: 'Hello',
        name: '',
      })
    }).toThrow('The "name" option must be not empty.')
  })
})

describe('helloWorld.ts', () => {
  test('Valid options', () => {
    expect(
      helloWorld({
        action: 'Hello',
        name: 'World',
      })
    ).toBe('Hello World!')
  })
})
