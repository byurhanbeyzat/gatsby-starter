import { css } from 'styled-components'

const reset = css`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
    margin-bottom: 0;
  }

  button {
    border: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
  }

  img {
    font-style: italic;
    vertical-align: middle;
    max-width: 100%;
  }

  svg {
    fill: currentColor;
    display: inline-block;
    vertical-align: middle;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default reset
