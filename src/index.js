// @flow weak
import { transform } from 'babel-core'
// import blog from 'babel-log'

export default ({ types: t, traverse, template }) => {
  const importDeclaration = path => {
    const { node: src } = path.get('source.value')
    const { node: name } = path.get('specifiers.0.local.name')
  }

  return {
    name: 'seed',
    visitor: {
      Identifier(path) {
        //write your plugin here!
        path.node.name = path.node.name
          .split('')
          .reverse()
          .join('')
      },
      ImportDeclaration: importDeclaration,
    },
  }
}
