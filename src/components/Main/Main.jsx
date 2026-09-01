import { Route, Routes, useLocation } from 'react-router-dom'

import { AnimatePresence, motion } from 'motion/react'

import Home from '../../routes/Home'
import Activities from '../../routes/Activities'
import ActivityDetail from '../../routes/ActivityDetail'
import Contact from '../../routes/Contact'

function Main() {
  const location = useLocation()

  return (
    <main>
      <AnimatePresence mode='wait'>
        <motion.div
          key={location.key}
          initial={{
            opacity: 0,
            y: 18
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -12
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
        >
          <Routes location={location}>
            <Route path='/' element={<Home />} />

            <Route path='/actividades' element={<Activities />} />

            <Route
              path='/actividades/:activityId'
              element={<ActivityDetail />}
            />
            <Route path='/contacto' element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </main>
  )
}

export default Main
