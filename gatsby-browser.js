const React = require('react')
const { GlobalProvider } = require('@/hooks')

exports.wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}
