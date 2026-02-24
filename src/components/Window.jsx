import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindows } from '../contexts/WindowContext'
import WindowContent from './WindowContent'
import { WindowIcon } from './Icon'
import '../styles/Window.css'

export default function Window({ window }) {
  const { updateWindow, closeWindow, bringToFront, minimizeWindow, maximizeWindow } = useWindows()
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const windowRef = useRef(null)

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-titlebar')) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - window.x,
        y: e.clientY - window.y
      })
      bringToFront(window.id)
    }
  }

  const handleResizeMouseDown = (e) => {
    setIsResizing(true)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: window.width,
      height: window.height
    })
    bringToFront(window.id)
    e.stopPropagation()
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newX = e.clientX - dragStart.x
        const newY = e.clientY - dragStart.y
        const maxX = globalThis.innerWidth - (window.width || 400)
        const maxY = globalThis.innerHeight - (window.height || 400) - 36
        updateWindow(window.id, {
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        })
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStart.x
        const deltaY = e.clientY - resizeStart.y
        const newWidth = Math.max(400, resizeStart.width + deltaX)
        const newHeight = Math.max(300, resizeStart.height + deltaY)
        updateWindow(window.id, {
          width: newWidth,
          height: newHeight
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    if (isDragging || isResizing) {
      globalThis.addEventListener('mousemove', handleMouseMove)
      globalThis.addEventListener('mouseup', handleMouseUp)
      return () => {
        globalThis.removeEventListener('mousemove', handleMouseMove)
        globalThis.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, isResizing, dragStart, resizeStart, window, updateWindow])

  if (window.isMinimized) {
    return null
  }

  const windowStyle = window.isMaximized
    ? {
        left: 0,
        top: 0,
        width: '100vw',
        height: 'calc(100vh - 36px)'
      }
    : {
        left: window.x,
        top: window.y,
        width: window.width,
        height: window.height
      }

  return (
    <AnimatePresence>
      <motion.div
        ref={windowRef}
        className="window-container"
        style={{
          zIndex: window.zIndex,
          position: 'fixed',
          ...windowStyle
        }}
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          ...windowStyle
        }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.2 }}
        onMouseDown={() => bringToFront(window.id)}
      >
        <div className="window" onMouseDown={handleMouseDown}>
          <div className="window-titlebar">
            <div className="window-title">
              <WindowIcon iconType={window.iconType || window.content?.iconType} size={16} />
              <span>{window.title}</span>
            </div>
            <div className="window-controls">
              <button
                className="window-button minimize"
                onClick={() => minimizeWindow(window.id)}
                title="Minimize"
              >
                ─
              </button>
              <button
                className="window-button maximize"
                onClick={() => maximizeWindow(window.id)}
                title={window.isMaximized ? "Restore" : "Maximize"}
              >
                {window.isMaximized ? '🗗' : '□'}
              </button>
              <button
                className="window-button close"
                onClick={() => closeWindow(window.id)}
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="window-content">
            <WindowContent window={window} />
          </div>
          {!window.isMaximized && (
            <div
              className="window-resize-handle"
              onMouseDown={handleResizeMouseDown}
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

