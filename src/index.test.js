// @flow
import plugin from '.'
import pluginTester from 'babel-plugin-tester'

// jest.mock('./')

// const code = ``

// $FlowFixMe
// gist.mockImplementation(() => code)

// afterAll(() => {})

pluginTester({
  title: 'default',
  plugin,
  snapshot: true,
  tests: [
    `const oof = 1`,
    {
      title: 'test title',
      code: `const foo = 1`,
    },
  ],
})
