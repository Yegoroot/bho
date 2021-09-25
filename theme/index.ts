import { createTheme } from '@mui/material'

import { red } from '@mui/material/colors'
import { DIRECTION } from '../constants'

type PaletteMode = 'dark' | 'light'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
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
          main: '#fff',
        },
        secondary: {
          main: '#19857b',
        },
        error: {
          main: red.A400,
        },
        background: {
          default: '#17414e',
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
