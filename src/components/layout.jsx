import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { reset, theme } from 'styles'

import SEO from 'components/seo'

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: ${p => p.theme.fonts.body};
  }
`

const Layout = ({ title, children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <SEO title={title} />
      <main role="main">{children}</main>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
