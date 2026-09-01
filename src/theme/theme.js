import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#C6FF00',
          contrastText: '#111111'
        },

        background: {
          default: '#F7F7F7',
          paper: '#FFFFFF'
        },

        text: {
          primary: '#111111',
          secondary: '#606060'
        },

        divider: '#E2E2E2'
      }
    },

    dark: {
      palette: {
        primary: {
          main: '#C6FF00',
          contrastText: '#111111'
        },

        background: {
          default: '#0D0D0D',
          paper: '#1A1A1A'
        },

        text: {
          primary: '#FFFFFF',
          secondary: '#A6A6A6'
        },

        divider: '#2B2B2B'
      }
    }
  },

  typography: {
    fontFamily: '"Roboto", sans-serif',

    h1: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 700
    },

    h2: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 700
    },

    h3: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 600
    },

    button: {
      fontWeight: 700
    }
  }
})

export default theme
