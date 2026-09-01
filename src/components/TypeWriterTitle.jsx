import { useEffect, useMemo, useRef, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { motion, useInView, useReducedMotion } from 'motion/react'

const motionHeadings = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3
}

function TypewriterTitle({
  text,
  parts,
  component = 'h2',
  color = '#111111',
  cursorColor = '#C6FF00',
  align = 'center',
  once = false,
  speed = 70,
  startDelay = 200,
  sx = {}
}) {
  const titleRef = useRef(null)
  const hasAnimated = useRef(false)

  const shouldReduceMotion = useReducedMotion()

  const isInView = useInView(titleRef, {
    amount: 0.7
  })

  const titleParts = useMemo(
    () =>
      parts ?? [
        {
          text,
          color,
          block: false
        }
      ],
    [parts, text, color]
  )

  const totalCharacters = useMemo(
    () =>
      titleParts.reduce(
        (total, part) => total + Array.from(part.text).length,
        0
      ),
    [titleParts]
  )

  const [visibleCharacters, setVisibleCharacters] = useState(
    shouldReduceMotion ? totalCharacters : 0
  )

  const MotionHeading = motionHeadings[component] ?? motionHeadings.h2

  const accessibleText = titleParts.map(part => part.text).join(' ')

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleCharacters(totalCharacters)
      return
    }

    if (!isInView) {
      if (!once) {
        setVisibleCharacters(0)
      }

      return
    }

    if (once && hasAnimated.current) {
      return
    }

    hasAnimated.current = true
    setVisibleCharacters(0)

    let intervalId

    const delayId = setTimeout(() => {
      intervalId = setInterval(() => {
        setVisibleCharacters(current => {
          if (current >= totalCharacters) {
            clearInterval(intervalId)
            return totalCharacters
          }

          return current + 1
        })
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(delayId)
      clearInterval(intervalId)
    }
  }, [isInView, once, shouldReduceMotion, speed, startDelay, totalCharacters])

  let accumulatedCharacters = 0

  const activePartIndex = titleParts.findIndex(part => {
    const partLength = Array.from(part.text).length
    const isActive = visibleCharacters <= accumulatedCharacters + partLength

    accumulatedCharacters += partLength

    return isActive
  })

  const currentPartIndex =
    activePartIndex === -1 ? titleParts.length - 1 : activePartIndex

  accumulatedCharacters = 0

  return (
    <Typography
      ref={titleRef}
      component={MotionHeading}
      aria-label={accessibleText}
      sx={{
        m: 0,
        color,
        fontFamily: 'Oswald, sans-serif',
        fontSize: {
          xs: '2rem',
          md: '2.5rem'
        },
        fontWeight: 700,
        lineHeight: 1.2,
        textAlign: align,
        textTransform: 'uppercase',
        ...sx
      }}
    >
      {titleParts.map((part, partIndex) => {
        const characters = Array.from(part.text)

        const charactersForPart = Math.max(
          0,
          Math.min(characters.length, visibleCharacters - accumulatedCharacters)
        )

        accumulatedCharacters += characters.length

        const visibleText = characters.slice(0, charactersForPart).join('')

        const showPart =
          partIndex <= currentPartIndex || visibleCharacters === totalCharacters

        const showCursor = partIndex === currentPartIndex && !shouldReduceMotion

        if (!showPart) {
          return null
        }

        return (
          <Box
            key={`${part.text}-${partIndex}`}
            component='span'
            aria-hidden='true'
            sx={{
              display: part.block ? 'block' : 'inline',
              minHeight: part.block ? '1em' : undefined,
              color: part.color ?? color
            }}
          >
            {visibleText}

            {showCursor && (
              <Box
                component={motion.span}
                animate={{
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 0.75,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                sx={{
                  display: 'inline-block',
                  ml: 0.3,
                  color: cursorColor
                }}
              >
                |
              </Box>
            )}
          </Box>
        )
      })}
    </Typography>
  )
}

export default TypewriterTitle
