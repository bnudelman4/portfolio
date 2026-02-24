import { createContext, useState, useContext, useCallback } from 'react'

const WindowContext = createContext(null)

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState([])
  const [zIndex, setZIndex] = useState(1000)

  const openWindow = useCallback((windowData) => {
    const newWindow = {
      id: Date.now(),
      ...windowData,
      x: windowData.x || Math.random() * 200 + 50,
      y: windowData.y || Math.random() * 200 + 50,
      width: windowData.width || 600,
      height: windowData.height || 500,
      isMinimized: false,
      isMaximized: false,
      zIndex: zIndex + 1,
    }
    setZIndex(prev => prev + 1)
    setWindows(prev => [...prev, newWindow])
    return newWindow.id
  }, [zIndex])

  const closeWindow = useCallback((id) => {
    setWindows(prev => prev.filter(w => w.id !== id))
  }, [])

  const updateWindow = useCallback((id, updates) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, ...updates } : w
    ))
  }, [])

  const bringToFront = useCallback((id) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, zIndex: zIndex + 1 } : w
    ))
    setZIndex(prev => prev + 1)
  }, [zIndex])

  const minimizeWindow = useCallback((id) => {
    updateWindow(id, { isMinimized: true, isMaximized: false })
  }, [updateWindow])

  const maximizeWindow = useCallback((id) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return {
          ...w,
          isMaximized: !w.isMaximized,
          isMinimized: false,
        }
      }
      return w
    }))
  }, [])

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        updateWindow,
        bringToFront,
        minimizeWindow,
        maximizeWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export function useWindows() {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('useWindows must be used within WindowProvider')
  }
  return context
}

