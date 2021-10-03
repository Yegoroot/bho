import { createTheme, Theme, PaletteOptions } from '@mui/material'

import { red } from '@mui/material/colors'
import { DIRECTION } from 'src/constants'

import { responsiveFontSizes } from '@mui/material/styles'

type PaletteMode = 'dark' | 'light'

const getPallete = (mode: PaletteMode): PaletteOptions => (mode === 'dark' ? {
  mode,
  primary: {
    main: '#fff',
    contrastText: '#232d3c'
  },
  secondary: {
    main: '#232d3c',
  },
  error: {
    main: red.A400,
  },
  background: {
    default: '#232d3c',
  },
  text: {
    primary: '#fff',
  },
} : {
  mode,
  primary: {
    main: '#232d3c',
    contrastText: '#fff'
  },
  secondary: {
    main: '#19857b',
  },
  // error: {
  //   main: red.A400,
  // },
  // background: {
  //   default: '#17414e',
  // },
  // text: {
  //   primary: '#000',
  // },
})

// Create a theme instance.
const theme: Theme = createTheme({
  direction: DIRECTION,
  palette: { ...getPallete('dark') },
  typography: {
    // htmlFontSize: 16,
    h1: {
      fontSize: 72,
      marginTop: 80,
      marginBottom: 24
    },
  },
})

export default responsiveFontSizes(theme)
