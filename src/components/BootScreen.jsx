import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/BootScreen.css'

export default function BootScreen({ progress }) {
  const [phase, setPhase] = useState('black') // black -> line -> expand -> signal

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('line'), 400)
    const t2 = setTimeout(() => setPhase('expand'), 700)
    const t3 = setTimeout(() => setPhase('signal'), 1800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <div className="crt-boot">
      {/* Your face as very dark background - fades in as loading happens */}
      <motion.div
        className="crt-bg-face"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      />

      {/* Scanlines (visible after screen "on") */}
      <motion.div
        className="crt-scanlines"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'signal' ? 0.12 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Thin line that expands - the "beam" */}
      <motion.div
        className="crt-beam"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: phase === 'line' ? 2 : phase === 'expand' ? '100%' : 0,
          opacity: phase === 'black' ? 0 : phase === 'line' ? 1 : phase === 'expand' ? 1 : 0,
        }}
        transition={{
          height: {
            duration: phase === 'expand' ? 0.9 : 0,
            ease: [0.22, 0.61, 0.36, 1],
          },
          opacity: { duration: 0.2 },
        }}
      />

      {/* "Signal detected" + progress */}
      <motion.div
        className="crt-message-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'signal' ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="crt-title">ben's portfoliOS</p>
        <p className="crt-signal-text">Signal detected</p>
        <div className="crt-progress-track">
          <motion.div
            className="crt-progress-fill"
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.div>
    </div>
  )
}
