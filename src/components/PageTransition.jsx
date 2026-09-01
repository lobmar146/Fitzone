import Box from '@mui/material/Box'

function PageTransition({ children }) {
  return (
    <Box
      sx={{
        '@keyframes pageEnter': {
          from: {
            opacity: 0,
            transform: 'translateY(16px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },

        animation: 'pageEnter 450ms ease-out',

        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none'
        }
      }}
    >
      {children}
    </Box>
  )
}

export default PageTransition
