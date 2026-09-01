import './App.css'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { useContext } from 'react'
import { ElementosGlobales } from './context/ElementosGlobales'
import ScrollTopButton from './components/Home/ScrollTopButton'
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <Main />

      <Footer />
      <ScrollTopButton />
    </ThemeProvider>
  )
}

export default App
