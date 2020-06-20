import React from 'react'
import { Link } from 'gatsby'
import { HeaderNav } from './Header.styles'
import { Container, Flex, Logo } from '@/components/elements'
import { Menu } from '@/components'

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        {/* give the header 0 height to prevent it from blocking
          when we're interacting with the layered canvas */}
        <Flex justify="between" flat style={{ background: 'red' }}>
          <Logo>
            <Link to="/">BIT</Link>
            <span />
            <Link to="/">CR81V</Link>
          </Logo>
          <Menu>
            <button>
              <span />
              <span />
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
