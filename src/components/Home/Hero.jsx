import { Box, Button, Container, Typography } from '@mui/material'

export default function Hero() {
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
        color: 'white',

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
            maxWidth: 600,
            py: {
              xs: 8,
              md: 12
            }
          }}
        >
          <Typography
            component='h1'
            sx={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 700,
              fontSize: {
                xs: '3rem',
                sm: '4rem',
                md: '5rem'
              },
              lineHeight: 1,
              textTransform: 'uppercase'
            }}
          >
            Entrená
            <Box
              component='span'
              sx={{
                display: 'block',
                color: 'primary.main'
              }}
            >
              a tu manera
            </Box>
          </Typography>

          <Typography
            component='p'
            sx={{
              mt: 3,
              mb: 4,
              maxWidth: 450,
              fontSize: {
                xs: '1rem',
                md: '1.25rem'
              },
              color: 'rgba(255, 255, 255, 0.85)'
            }}
          >
            Encontrá la actividad ideal para vos y alcanzá tus objetivos
            acompañado por profesionales.
          </Typography>

          <Button
            variant='contained'
            color='primary'
            size='large'
            sx={{
              px: 4,
              py: 1.5,
              color: 'common.black',
              fontWeight: 700,
              textTransform: 'none'
            }}
          >
            Ver actividades
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
