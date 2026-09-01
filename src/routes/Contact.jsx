import { useState } from 'react'

import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material'

import TypewriterTitle from '../components/TypewriterTitle'

const activities = [
  'Musculación',
  'Funcional',
  'Spinning',
  'Yoga',
  'Boxeo',
  'Pilates'
]

const fieldStyles = {
  '& .MuiInputLabel-root': {
    color: '#555555'
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: '#668500'
  },

  '& .MuiInputBase-input': {
    color: '#111111'
  },

  '& .MuiOutlinedInput-root': {
    bgcolor: '#FFFFFF',

    '& fieldset': {
      borderColor: '#9A9A9A'
    },

    '&:hover fieldset': {
      borderColor: '#555555'
    },

    '&.Mui-focused fieldset': {
      borderWidth: 2,
      borderColor: '#7A9E00'
    }
  }
}

function Contact() {
  const [activity, setActivity] = useState('')
  const [shift, setShift] = useState('mañana')
  const [success, setSuccess] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      activity,
      shift,
      newsletter: formData.get('newsletter') === 'on'
    }

    console.log(contactData)

    setSuccess(true)
    event.currentTarget.reset()
    setActivity('')
    setShift('mañana')
  }

  return (
    <Box
      component='section'
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
        {/* Encabezado */}
        <Box
          sx={{
            mb: {
              xs: 4,
              md: 5
            },
            textAlign: 'center'
          }}
        >
          <TypewriterTitle
            text='Sumate a FitZone'
            component='h1'
            color='#FFFFFF'
            cursorColor='#C6FF00'
            align='center'
            once={false}
            speed={65}
            startDelay={150}
            sx={{
              fontSize: {
                xs: '2.3rem',
                md: '3rem'
              },
              lineHeight: 1.2
            }}
          />

          <Box
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
            Completá tus datos y nos pondremos en contacto con vos.
          </Typography>
        </Box>

        {/* Formulario centrado */}
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: 680,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
            bgcolor: '#FFFFFF',
            color: '#111111',
            border: '1px solid #D8D8D8',
            borderRadius: 2,
            boxShadow: '0 14px 40px rgba(0, 0, 0, 0.45)',
            p: {
              xs: 3,
              sm: 4,
              md: 5
            }
          }}
        >
          {success && (
            <Alert severity='success' onClose={() => setSuccess(false)}>
              ¡Solicitud enviada correctamente!
            </Alert>
          )}

          <TextField
            name='name'
            label='Nombre y apellido'
            placeholder='Ej.: Juan Pérez'
            variant='outlined'
            required
            fullWidth
            sx={fieldStyles}
          />

          <TextField
            name='email'
            label='Correo electrónico'
            placeholder='Ej.: juan@email.com'
            type='email'
            variant='outlined'
            required
            fullWidth
            sx={fieldStyles}
          />

          <TextField
            name='phone'
            label='Teléfono'
            placeholder='Ej.: 11 1234-5678'
            type='tel'
            variant='outlined'
            required
            fullWidth
            sx={fieldStyles}
          />

          <FormControl fullWidth required sx={fieldStyles}>
            <InputLabel id='activity-label'>Actividad de interés</InputLabel>

            <Select
              labelId='activity-label'
              value={activity}
              label='Actividad de interés'
              onChange={event => setActivity(event.target.value)}
              sx={{
                color: '#111111',
                bgcolor: '#FFFFFF',

                '& .MuiSelect-icon': {
                  color: '#444444'
                }
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left'
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left'
                },
                slotProps: {
                  paper: {
                    sx: {
                      mt: 0.5,
                      maxHeight: 320,
                      bgcolor: '#FFFFFF !important',
                      color: '#111111',
                      border: '1px solid #D8D8D8',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',

                      '& .MuiMenu-list': {
                        py: 0.5,
                        bgcolor: '#FFFFFF'
                      },

                      '& .MuiMenuItem-root': {
                        minHeight: 44,
                        color: '#111111',
                        bgcolor: '#FFFFFF',

                        '&:hover': {
                          bgcolor: '#F0F5E3'
                        },

                        '&.Mui-selected': {
                          color: '#111111',
                          bgcolor: '#DFF58C'
                        },

                        '&.Mui-selected:hover': {
                          bgcolor: '#D2EC6C'
                        }
                      }
                    }
                  }
                }
              }}
            >
              {activities.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel
              sx={{
                color: '#222222',
                fontWeight: 600,

                '&.Mui-focused': {
                  color: '#222222'
                }
              }}
            >
              Turno
            </FormLabel>

            <RadioGroup
              row
              value={shift}
              onChange={event => setShift(event.target.value)}
              sx={{
                mt: 0.5,
                columnGap: {
                  xs: 0,
                  sm: 2
                }
              }}
            >
              {['mañana', 'tarde', 'noche'].map(item => (
                <FormControlLabel
                  key={item}
                  value={item}
                  label={item.charAt(0).toUpperCase() + item.slice(1)}
                  sx={{
                    color: '#222222'
                  }}
                  control={
                    <Radio
                      sx={{
                        color: '#777777',

                        '&.Mui-checked': {
                          color: '#7A9E00'
                        }
                      }}
                    />
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>

          <FormControlLabel
            sx={{
              color: '#333333'
            }}
            control={
              <Checkbox
                name='newsletter'
                sx={{
                  color: '#777777',

                  '&.Mui-checked': {
                    color: '#7A9E00'
                  }
                }}
              />
            }
            label={
              <Typography
                sx={{
                  color: '#333333',
                  fontSize: '0.9rem'
                }}
              >
                Acepto recibir novedades y promociones.
              </Typography>
            }
          />

          <Button
            type='submit'
            variant='contained'
            disableElevation
            sx={{
              mt: 1,
              py: 1.4,
              bgcolor: '#C6FF00',
              color: '#111111',
              fontWeight: 700,
              textTransform: 'none',

              '&:hover': {
                bgcolor: '#AEEA00'
              }
            }}
          >
            Enviar solicitud
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
