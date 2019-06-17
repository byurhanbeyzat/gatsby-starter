const colors = {
  dark: 'rgba(32, 31, 30, 1)',
  grey: 'grey',
  light: 'rgba(255, 255, 255, .08)',
  primary: '#ffff00',
  secondary: '#ff0000',
}

const fonts = {
  heading: "'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  body: "'Playfair Display', Georgia, serif",
}

const fontSizes = {
  text: [14, 16, 18],
  heading: [20, 24, 28, 48, 64],
}

const fontWeights = {
  lighter: 300,
  light: 400,
  base: 500,
  bold: 600,
  heavy: 700,
}

const lineHeights = {
  heading: 1.4,
  paragraph: 1.6,
}

const shadows = {
  light: `0 3px 13px 0 rgba(${colors.dark}, .03)`,
  dark: `0 6px 26px 0 rgba(${colors.dark}, .1)`,
}

const space = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64]

const sizes = {
  xs: '40em',
  sm: '52em',
  lg: '64em',
  xl: '',
  xxl: '',
}

const theme = {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  colors,
  space,
  sizes,
}

export default theme
