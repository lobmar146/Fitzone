import { Link } from 'react-router-dom'

import { Box, Button, Container, Typography } from '@mui/material'

import TypewriterTitle from '../TypeWriterTitle'

function Hero() {
  return (
    <Box
      component='section'
      sx={{
        minHeight: {
          xs: 500,
          md: 600
        },
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',

        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.65) 45%,
            rgba(0, 0, 0, 0.1) 100%
          ),
          url('/images/hero.jpg')
        `,

        backgroundSize: 'cover',
        backgroundPosition: {
          xs: '65% center',
          md: 'center'
        },
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container maxWidth='xl'>
        <Box
          sx={{
            maxWidth: 650,
            py: {
              xs: 8,
              md: 12
            }
          }}
        >
          {/* Título animado */}
          <TypewriterTitle
            component='h1'
            align='left'
            cursorColor='#FFFFFF'
            once={false}
            parts={[
              {
                text: 'Entrená',
                color: '#FFFFFF',
                block: true
              },
              {
                text: 'a tu manera',
                color: '#C6FF00',
                block: true
              }
            ]}
            sx={{
              fontSize: {
                xs: '3rem',
                sm: '4rem',
                md: '5rem'
              },
              lineHeight: 1
            }}
          />

          {/* Descripción */}
          <Typography
            component='p'
            sx={{
              maxWidth: 450,
              mt: 3,
              mb: 4,
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: {
                xs: '1rem',
                md: '1.25rem'
              },
              lineHeight: 1.6
            }}
          >
            Encontrá la actividad ideal para vos y alcanzá tus objetivos
            acompañado por profesionales.
          </Typography>

          {/* Botón */}
          <Button
            component={Link}
            to='/actividades'
            variant='contained'
            color='primary'
            size='large'
            disableElevation
            sx={{
              px: 4,
              py: 1.5,
              color: '#111111',
              bgcolor: '#C6FF00',
              fontWeight: 700,
              textTransform: 'none',

              '&:hover': {
                bgcolor: '#AEEA00'
              }
            }}
          >
            Ver actividades
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
