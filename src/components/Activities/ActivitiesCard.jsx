import { Link } from 'react-router-dom'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'

function ActivitiesCard({ activity }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        bgcolor: '#FFFFFF',
        border: '1px solid #D8D8D8',
        borderRadius: 2,
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',

        '&:hover': {
          transform: 'translateY(-7px)',
          boxShadow: '0 14px 30px rgba(0, 0, 0, 0.5)'
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
          alt={`Actividad de ${activity.name}`}
          sx={{
            width: '100%',
            height: {
              xs: 230,
              sm: 210,
              md: 220
            },
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
        />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
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
          component='h2'
          sx={{
            color: '#111111',
            fontSize: '1.3rem',
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: 'center'
          }}
        >
          {activity.name}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.7,
            mt: 1.5
          }}
        >
          <CalendarMonthOutlinedIcon
            sx={{
              flexShrink: 0,
              color: '#4F4F4F',
              fontSize: 17
            }}
          />

          <Typography
            sx={{
              color: '#555555',
              fontSize: '0.85rem',
              textAlign: 'center'
            }}
          >
            {activity.schedule}
          </Typography>
        </Box>

        <Button
          component={Link}
          to={`/actividades/${activity.slug}`}
          variant='contained'
          disableElevation
          sx={{
            mt: 3,
            px: 3,
            py: 1,
            bgcolor: '#C6FF00',
            color: '#111111',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'none',

            '&:hover': {
              bgcolor: '#AEEA00'
            }
          }}
        >
          Detalles
        </Button>
      </CardContent>
    </Card>
  )
}

export default ActivitiesCard
