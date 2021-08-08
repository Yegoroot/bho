import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import { DIRECTION } from '../constants'

// Create a theme instance.
const theme = createTheme({
  direction: DIRECTION,
  palette: {
    primary: {
      main: '#556cd6',
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
      primary: '#000'
    }
  },
})

export default theme
