import { Box, Container, IconButton, Stack, Typography } from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const socialLinks = [
  {
    id: 1,
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: InstagramIcon
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: FacebookIcon
  },
  {
    id: 3,
    name: 'WhatsApp',
    url: 'https://wa.me/5491112345678',
    icon: WhatsAppIcon
  }
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component='footer'
      sx={{
        bgcolor: '#0D0D0D',
        color: '#FFFFFF',
        borderTop: '1px solid #242424',
        py: 3
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row'
            },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: {
              xs: 3,
              md: 2
            }
          }}
        >
          {/* Logo */}
          <Box
            component='a'
            href='/'
            aria-label='Ir al inicio de FitZone'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.2,
              color: '#FFFFFF',
              textDecoration: 'none'
            }}
          >
            <Box
              component='img'
              src='/images/logo.svg'
              alt=''
              sx={{
                width: 42,
                height: 42,
                objectFit: 'contain'
              }}
            />

            <Typography
              component='span'
              sx={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '1.7rem',
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: '.04rem'
              }}
            >
              FITZONE
            </Typography>
          </Box>

          {/* Redes sociales */}
          <Stack
            component='nav'
            aria-label='Redes sociales'
            direction='row'
            spacing={1}
          >
            {socialLinks.map(social => {
              const Icon = social.icon

              return (
                <IconButton
                  key={social.id}
                  component='a'
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.name}
                  sx={{
                    color: '#FFFFFF',
                    border: '1px solid #666666',
                    transition: 'color 0.2s, border-color 0.2s',

                    '&:hover': {
                      color: '#C6FF00',
                      borderColor: '#C6FF00',
                      bgcolor: 'rgba(198, 255, 0, 0.08)'
                    }
                  }}
                >
                  <Icon sx={{ fontSize: 21 }} />
                </IconButton>
              )
            })}
          </Stack>

          {/* Copyright */}
          <Typography
            sx={{
              color: '#B7B7B7',
              fontSize: '0.85rem',
              textAlign: {
                xs: 'center',
                md: 'right'
              }
            }}
          >
            © {currentYear} FitZone · Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
