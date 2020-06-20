import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import _ from 'lodash'
import baseTheme, { DARK_THEME, GlobalStyles, LIGHT_THEME } from '@/theme'
import { Header } from '@/components'
import { useGlobalState } from '@/hooks'

import '../theme/typekit.fonts.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { currentTheme } = useGlobalState()

  const theme = _.merge(
    baseTheme,
    currentTheme === 'dark' ? DARK_THEME : LIGHT_THEME
  )
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
