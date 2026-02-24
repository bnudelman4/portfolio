import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import BootScreen from './components/BootScreen'
import Desktop from './components/Desktop'
import { WindowProvider } from './contexts/WindowContext'
import './styles/global.css'
import './styles/Mobile.css'

function App() {
  const [isBooting, setIsBooting] = useState(true)
  const [bootProgress, setBootProgress] = useState(0)

  useEffect(() => {
    if (isBooting) {
      // Simulate longer boot process
      const interval = setInterval(() => {
        setBootProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            // Wait longer before transitioning
            setTimeout(() => setIsBooting(false), 1500)
            return 100
          }
          // Slower progress increments for longer boot
          return prev + Math.random() * 8 + 3
        })
      }, 300) // Slower interval

      return () => clearInterval(interval)
    }
  }, [isBooting])

  if (isBooting) {
    return <BootScreen progress={bootProgress} />
  }

  return (
    <WindowProvider>
      <Desktop />
      <Analytics />
    </WindowProvider>
  )
}

export default App
