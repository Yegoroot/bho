import { createTheme, Theme, PaletteOptions } from '@mui/material'

import { red } from '@mui/material/colors'
import { DIRECTION } from '../constants'

type PaletteMode = 'dark' | 'light'

const getPallete = (mode: PaletteMode): PaletteOptions => (mode === 'dark' ? {
  mode,
  primary: {
    main: '#fff',
    contrastText: '#000'
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
    primary: '#fff',
  },
} : {
  mode,
  primary: {
    main: '#000',
    contrastText: '#fff'
  },
  // secondary: {
  //   main: '#19857b',
  // },
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
  palette: { ...getPallete('dark') }
})

export default theme
