import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext, useState, useRef } from 'react'
import { ElementosGlobales } from '../../context/ElementosGlobales'
import SearchBar from './Searchbar'
import ChangeTheme from './ChangeTheme'
const pages = ['Inicio', 'Actividades', 'Contacto']
import { Link } from 'react-router-dom'
function ResponsiveAppBar() {
  const { search, setSearch } = useContext(ElementosGlobales)

  const [anchorElNav, setAnchorElNav] = useState(null)

  const [searchFocused, setSearchFocused] = useState(false)
  const inputRef = useRef(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {/* BLOQUE IZQUIERDO */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            {/* Hamburguesa mobile */}
            <IconButton
              color='inherit'
              onClick={handleOpenNavMenu}
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none'
                }
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Carrito */}
            <Link
              to='/'
              style={{
                display: 'flex',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <img
                src='/images/logo.svg'
                alt='logo'
                style={{
                  width: 42,
                  height: 42,
                  display: 'block'
                }}
              />
            </Link>
            {/* Nombre */}
            <Typography
              variant='span'
              noWrap
              component='a'
              href='/'
              color='primary'
              sx={{
                fontFamily: 'monospace',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '2.4rem',
                letterSpacing: '.08rem',

                textDecoration: 'none'
              }}
            >
              FITZONE
            </Typography>
          </Box>

          {/* BLOQUE DERECHO */}
          {/* MENÚ ESCRITORIO */}
          <Box
            sx={{
              mr: '15vw',
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'white',
                  fontFamily: '"Roboto", sans-serif',
                  textTransform: 'none',
                  fontWeight: '400',
                  ml: 4
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map(page => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
