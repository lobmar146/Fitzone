import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material'

const activities = [
  {
    id: 1,
    title: 'Musculación',
    image: '/images/musculacion.png'
  },
  {
    id: 2,
    title: 'Spinning',
    image: '/images/spinning.png'
  },
  {
    id: 3,
    title: 'Funcional',
    image: '/images/funcional.png'
  }
]

function FeaturedActivities() {
  return (
    <Box
      component='section'
      sx={{
        bgcolor: '#FFFFFF',
        py: {
          xs: 6,
          md: 10
        }
      }}
    >
      <Container maxWidth='lg'>
        {/* Encabezado */}
        <Box
          sx={{
            mb: 5,
            textAlign: 'center'
          }}
        >
          <Typography
            component='h2'
            sx={{
              color: '#111111',
              fontFamily: 'Oswald, sans-serif',
              fontSize: {
                xs: '2rem',
                md: '2.5rem'
              },
              fontWeight: 700,
              lineHeight: 1.2,
              textTransform: 'uppercase'
            }}
          >
            Actividades destacadas
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 4,
              mx: 'auto',
              mt: 1.5,
              bgcolor: '#C6FF00',
              borderRadius: 2
            }}
          />
        </Box>

        {/* Cards */}
        <Grid container spacing={3}>
          {activities.map(activity => (
            <Grid key={activity.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  bgcolor: '#FFFFFF',
                  border: '1px solid #D8D8D8',
                  borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.25s, box-shadow 0.25s',

                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 26px rgba(0, 0, 0, 0.14)'
                  },

                  '&:hover img': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <Box sx={{ overflow: 'hidden' }}>
                  <CardMedia
                    component='img'
                    image={activity.image}
                    alt={`Actividad de ${activity.title}`}
                    sx={{
                      width: '100%',
                      height: {
                        xs: 220,
                        md: 240
                      },
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                </Box>

                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 3,

                    '&:last-child': {
                      pb: 3
                    }
                  }}
                >
                  <Typography
                    component='h3'
                    sx={{
                      color: '#111111',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      textAlign: 'center'
                    }}
                  >
                    {activity.title}
                  </Typography>

                  <Button
                    variant='outlined'
                    sx={{
                      mt: 2,
                      px: 3,
                      color: '#111111',
                      borderColor: '#9BC600',
                      borderWidth: 2,
                      fontWeight: 700,
                      textTransform: 'none',

                      '&:hover': {
                        color: '#111111',
                        bgcolor: '#C6FF00',
                        borderColor: '#C6FF00',
                        borderWidth: 2
                      }
                    }}
                  >
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default FeaturedActivities
