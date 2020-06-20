import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      background: ${p => p.theme.colors.text};
      margin: 8px;
      display: block;
    }
  }
`
const Menu = ({ children }) => {
  return <MenuWrapper>{children}</MenuWrapper>
}

export default Menu
