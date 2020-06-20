import GlobalStyles from './GlobalStyles'

const DARK_THEME = {
  colors: {
    background: '#111010',
    text: '#fff',
  },
}

const LIGHT_THEME = {
  colors: {
    background: '#fff',
    text: '#111010',
  },
}
const baseTheme = {
  fonts: {
    serif: `'fertigo-pro', 'serif'`,
  },
  colors: {
    black: '#111010',
    primary: '#ff0844',
  },
}

export default baseTheme
export { GlobalStyles, LIGHT_THEME, DARK_THEME }
