import styled from 'styled-components'
import theme from '@/theme'

const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 900;
    color: ${p => p.theme.colors.text};
    letter-spacing: 0.2rem;
  }
  a:last-child {
    opacity: 0;
  }
  span {
    height: 0.9rem;
    width: 0.9rem;
    display: inline-block;
    background: ${p => p.theme.colors.primary};
    margin: 0 6px;
    border-radius: 100%;
    position: relative;
    bottom: 2px;
  }
`

export default Logo
