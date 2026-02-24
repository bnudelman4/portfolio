import { useWindows } from '../contexts/WindowContext'
import { WindowIcon } from './Icon'
import '../styles/Taskbar.css'

export default function Taskbar({ showStartMenu, setShowStartMenu }) {
  const { windows, bringToFront, updateWindow } = useWindows()

  const handleTaskClick = (windowId) => {
    const win = windows.find(w => w.id === windowId)
    if (win && win.isMinimized) {
      updateWindow(windowId, { isMinimized: false })
      bringToFront(windowId)
    } else {
      bringToFront(windowId)
    }
  }

  const openWindows = windows.filter(w => !w.isMinimized)
  const taskbarTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })

  return (
    <div className="taskbar">
      <button 
        className="start-button"
        onClick={() => setShowStartMenu(!showStartMenu)}
      >
        <span className="start-text">START</span>
      </button>
      
      <div className="taskbar-tasks">
        {openWindows.map(window => (
          <button
            key={window.id}
            className="taskbar-task"
            onClick={() => handleTaskClick(window.id)}
          >
            <WindowIcon iconType={window.iconType || window.content?.iconType} size={16} />
            <span className="task-title">{window.title}</span>
          </button>
        ))}
      </div>

      <div className="taskbar-tray">
        <div className="tray-time">{taskbarTime}</div>
      </div>
    </div>
  )
}

