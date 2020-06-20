const React = require('react')
const { GlobalProvider } = require('@/context')

exports.wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}
