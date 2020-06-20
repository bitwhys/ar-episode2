import { createGlobalStyle, useTheme } from 'styled-components'
import { normalize } from 'styled-normalize'
import React from 'react'

const GlobalStyles = () => {
  const theme = useTheme()
  const Global = createGlobalStyle`
${normalize}
* {
text-decoration: none;
//cursor: none;
}

html {
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
font-size: 16px;
overflow-x:hidden;
}

body {
font-family: ff-good-headline-web-pro-ext, sans-serif; 
background: ${theme.colors.background};
transition: .2s ease-in-out;
}
`
  return <Global />
}

export default GlobalStyles
