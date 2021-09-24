import { createTheme } from '@material-ui/core/styles'

import { red } from '@material-ui/core/colors'
import { DIRECTION } from '../constants'

type PaletteMode = 'dark' | 'light'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#17414e',
        },
        secondary: {
          main: '#19857b',
        },
        error: {
          main: red.A400,
        },
        background: {
          default: '#fff',
        },
        text: {
          primary: '#000',
        },
      }
      : {
        primary: {
          main: '#17414e',
        },
        secondary: {
          main: '#19857b',
        },
        error: {
          main: red.A400,
        },
        background: {
          default: '#fff',
        },
        text: {
          primary: '#000',
        },
      }),
  },
})

// Create a theme instance.
const theme = createTheme({
  direction: DIRECTION,
  ...getDesignTokens('dark')
})

export default theme
