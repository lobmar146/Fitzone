import { Link, Navigate, useParams } from 'react-router-dom'

import { Box, Button, Container, Typography } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import activities from '../components/Activities/activitiesData'

function ActivityDetail() {
  const { activityId } = useParams()

  const activity = activities.find(item => item.slug === activityId)

  if (!activity) {
    return <Navigate to='/actividades' replace />
  }

  return (
    <Box
      component='main'
      sx={{
        minHeight: '100vh',
        bgcolor: '#101010',
        color: '#FFFFFF',
        py: {
          xs: 5,
          md: 8
        }
      }}
    >
      <Container maxWidth='lg'>
        <Button
          component={Link}
          to='/actividades'
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 4,
            color: '#C6FF00',
            textTransform: 'none'
          }}
        >
          Volver a actividades
        </Button>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1.1fr 1fr'
            },
            alignItems: 'center',
            gap: {
              xs: 4,
              md: 7
            }
          }}
        >
          <Box
            component='img'
            src={activity.image}
            alt={`Actividad de ${activity.name}`}
            sx={{
              width: '100%',
              maxHeight: 520,
              display: 'block',
              objectFit: 'cover',
              borderRadius: 2
            }}
          />

          <Box>
            <Typography
              component='h1'
              sx={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: {
                  xs: '2.5rem',
                  md: '4rem'
                },
                fontWeight: 700,
                lineHeight: 1.1,
                textTransform: 'uppercase'
              }}
            >
              {activity.name}
            </Typography>

            <Box
              sx={{
                width: 60,
                height: 4,
                mt: 2,
                bgcolor: '#C6FF00',
                borderRadius: 2
              }}
            />

            <Typography
              sx={{
                mt: 3,
                color: '#D0D0D0',
                fontSize: '1.1rem',
                lineHeight: 1.7
              }}
            >
              {activity.description}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: '#FFFFFF',
                fontWeight: 700
              }}
            >
              Horarios: {activity.schedule}
            </Typography>

            <Button
              component={Link}
              to='/contacto'
              variant='contained'
              disableElevation
              sx={{
                mt: 4,
                px: 4,
                py: 1.3,
                bgcolor: '#C6FF00',
                color: '#111111',
                fontWeight: 700,
                textTransform: 'none',

                '&:hover': {
                  bgcolor: '#AEEA00'
                }
              }}
            >
              Quiero inscribirme
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ActivityDetail
