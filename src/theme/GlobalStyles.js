import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
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
background: ${({ theme }) => theme.colors.background};
}
`

export default GlobalStyles
