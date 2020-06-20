import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { HeaderNav } from './Header.styles'
import { Container, Flex, Logo } from '@/components/elements'
import { Menu } from '@/components'
import { THEME_STORAGE_TOKEN } from '@/utils'

import { useGlobalState, useGlobalDispatch } from '@/hooks'

const Header = () => {
  const { currentTheme } = useGlobalState()
  const dispatch = useGlobalDispatch()
  const toggleTheme = () => {
    const payload = currentTheme === 'dark' ? 'light' : 'dark'
    dispatch({ type: 'TOGGLE_THEME', payload })
  }
  useEffect(() => {
    localStorage.getItem(THEME_STORAGE_TOKEN)
    localStorage[THEME_STORAGE_TOKEN] = currentTheme
  }, [currentTheme])
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 385,
        damping: 23,
      }}
    >
      <Container>
        {/* give the header 0 height to prevent it from blocking
          when we're interacting with the layered canvas */}
        <Flex justify="between" flat style={{ background: 'red' }}>
          <Logo>
            <Link to="/">BIT</Link>
            <span onClick={toggleTheme} />
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
