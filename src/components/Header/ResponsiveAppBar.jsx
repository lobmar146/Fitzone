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
const pages = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Actividades',
    path: '/actividades'
  },
  {
    name: 'Contacto',
    path: '/contacto'
  }
]
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
    <>
      <AppBar
        position='fixed'
        elevation={0}
        sx={{
          top: 0,

          borderBottom: '1px solid #242424',
          zIndex: theme => theme.zIndex.drawer + 1
        }}
      >
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
              component='nav'
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex'
                },
                alignItems: 'center',
                gap: 2
              }}
            >
              {pages.map(page => (
                <Button
                  key={page.path}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: '#FFFFFF',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    textTransform: 'none',

                    '&:hover': {
                      color: '#C6FF00',
                      bgcolor: 'transparent'
                    }
                  }}
                >
                  {page.name}
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

      {/* Reserva el espacio ocupado por el AppBar fijo */}
      <Toolbar
        sx={{
          minHeight: {
            xs: '64px !important',
            md: '72px !important'
          }
        }}
      />
    </>
  )
}

export default ResponsiveAppBar
