import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from '@mui/material'

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GroupsIcon from '@mui/icons-material/Groups'

import TypewriterTitle from '../TypeWriterTitle'

const benefits = [
  {
    id: 1,
    title: 'Equipamiento moderno',
    description: 'Contamos con equipos de última generación.',
    icon: FitnessCenterIcon
  },
  {
    id: 2,
    title: 'Horarios flexibles',
    description: 'Clases durante toda la semana.',
    icon: AccessTimeIcon
  },
  {
    id: 3,
    title: 'Profesores capacitados',
    description: 'Acompañamiento profesional y constante.',
    icon: GroupsIcon
  }
]

function BenefitsSection() {
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
          <TypewriterTitle
            text='¿Por qué FitZone?'
            component='h2'
            color='#111111'
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
            sx={{
              width: 55,
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
          {benefits.map(benefit => {
            const Icon = benefit.icon

            return (
              <Grid
                key={benefit.id}
                size={{
                  xs: 12,
                  md: 4
                }}
              >
                <Card
                  variant='outlined'
                  sx={{
                    height: '100%',
                    bgcolor: '#FFFFFF',
                    borderColor: '#D8D8D8',
                    borderRadius: 2,
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                    transition: 'transform 0.25s, box-shadow 0.25s',

                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 10px 24px rgba(0, 0, 0, 0.12)'
                    }
                  }}
                >
                  <CardContent
                    sx={{
                      minHeight: 280,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: {
                        xs: 3,
                        md: 4
                      },

                      '&:last-child': {
                        pb: {
                          xs: 3,
                          md: 4
                        }
                      }
                    }}
                  >
                    {/* Ícono */}
                    <Box
                      sx={{
                        width: 72,
                        height: 72,
                        display: 'grid',
                        placeItems: 'center',
                        mb: 2.5,
                        color: '#9BC600',
                        border: '2px solid #9BC600',
                        borderRadius: '50%'
                      }}
                    >
                      <Icon sx={{ fontSize: 38 }} />
                    </Box>

                    {/* Título de la card */}
                    <Typography
                      component='h3'
                      sx={{
                        maxWidth: 200,
                        color: '#111111',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        lineHeight: 1.25,
                        textAlign: 'center'
                      }}
                    >
                      {benefit.title}
                    </Typography>

                    {/* Descripción */}
                    <Typography
                      component='p'
                      sx={{
                        maxWidth: 270,
                        mt: 2,
                        mb: 0,
                        color: '#5F6368',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        textAlign: 'center'
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default BenefitsSection
