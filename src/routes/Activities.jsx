import { Box, Container, Grid, Typography } from '@mui/material'

import ActivitiesCard from '../components/Activities/ActivitiesCard'
import activities from '../components/Activities/activitiesData'
import TypewriterTitle from '../components/TypeWriterTitle'

function Activities() {
  return (
    <Box
      component='main'
      sx={{
        minHeight: '100vh',
        bgcolor: '#101010',
        color: '#FFFFFF',
        py: {
          xs: 6,
          md: 9
        }
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            mb: {
              xs: 5,
              md: 6
            },
            textAlign: 'center'
          }}
        >
          <TypewriterTitle
            text='NUESTRAS ACTIVIDADES'
            component='h2'
            color='#ffffff'
            cursorColor='#9BC600'
            align='center'
            once={false}
            speed={65}
            startDelay={150}
            sx={{
              fontSize: {
                xs: '2rem',
                md: '2.5rem'
              },
              lineHeight: 1.2
            }}
          />

          <Box
            aria-hidden='true'
            sx={{
              width: 65,
              height: 4,
              mx: 'auto',
              mt: 1.5,
              bgcolor: '#C6FF00',
              borderRadius: 2
            }}
          />

          <Typography
            component='p'
            sx={{
              mt: 2,
              color: '#D0D0D0',
              fontSize: {
                xs: '1rem',
                md: '1.1rem'
              }
            }}
          >
            Conocé todas las opciones disponibles
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {activities.map(activity => (
            <Grid
              key={activity.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4
              }}
            >
              <ActivitiesCard activity={activity} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Activities
