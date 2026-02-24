import { useState, useEffect, useRef } from 'react'
import { useWindows } from '../contexts/WindowContext'
import DesktopBackground from './DesktopBackground'
import DesktopIcons from './DesktopIcons'
import Taskbar from './Taskbar'
import WindowManager from './WindowManager'
import StartMenu from './StartMenu'
import { projects } from '../data/projects'
import { hub, aboutMe, skills, interests, contact } from '../data/portfolioContent'
import '../styles/Desktop.css'

// Only these four projects get desktop icons
const desktopProjectIds = [1, 2, 3, 5] // SimplifyCS, UniRides, In21, Music Recommender
const desktopProjects = projects.filter((p) => desktopProjectIds.includes(p.id))

const systemIcons = [
  { id: 'ie', name: 'Internet Explorer', iconType: 'internet-explorer', x: 10, y: 20, action: 'contact' },
  { id: 'documents', name: 'Documents', iconType: 'documents', x: 10, y: 100, action: 'documents' },
  { id: 'about', name: 'About Me', iconType: 'computer', x: 10, y: 180, action: 'about' },
  { id: 'resume', name: 'Resume.txt', iconType: 'document', x: 10, y: 260, action: 'resume' },
  { id: 'settings', name: 'Settings', iconType: 'settings', x: 10, y: 340, action: 'skills' },
  { id: 'games', name: 'Games', iconType: 'playing-card', x: 100, y: 340, action: 'games' },
  { id: 'photos', name: 'Photos', iconType: 'photos', x: 100, y: 420, action: 'photos' },
  { id: 'recycle', name: 'Recycle Bin', iconType: 'recycle-bin', x: 10, y: 420, action: 'recycle' },
]

export default function Desktop() {
  const [showStartMenu, setShowStartMenu] = useState(false)
  const { openWindow } = useWindows()
  const welcomeOpened = useRef(false)

  useEffect(() => {
    if (welcomeOpened.current) return
    welcomeOpened.current = true
    const w = 520
    const h = 460
    const x = typeof window !== 'undefined' ? (window.innerWidth - w) / 2 : 400
    const y = typeof window !== 'undefined' ? Math.max(40, (window.innerHeight - 36 - h) / 2) : 80
    openWindow({
      title: "Welcome",
      type: 'hub',
      iconType: 'portfolio',
      content: {
        ...hub,
        skills,
        contact,
        interests,
        about: aboutMe,
        projects,
        showWelcomeNote: true,
      },
      width: w,
      height: h,
      x,
      y,
    })
  }, [openWindow])

  const handleSystemAction = (action) => {
    switch (action) {
      case 'contact':
        openWindow({ title: 'Contact', type: 'contact', iconType: 'internet-explorer', content: contact, width: 420, height: 320 })
        break
      case 'about':
        openWindow({ title: 'About Me', type: 'content', iconType: 'computer', content: aboutMe, width: 500, height: 380 })
        break
      case 'documents':
        openWindow({
          title: 'Documents - My Projects',
          type: 'file-explorer',
          iconType: 'documents',
          content: { projects },
          width: 420,
          height: 440,
        })
        break
      case 'resume':
        openWindow({
          title: 'Resume.txt',
          type: 'resume',
          iconType: 'document',
          content: { url: '/Resume.pdf' },
          width: 560,
          height: 720,
        })
        break
      case 'skills':
        openWindow({ title: 'Skills & Experience', type: 'content', iconType: 'settings', content: skills, width: 500, height: 450 })
        break
      case 'games':
        openWindow({
          title: 'Games',
          type: 'games',
          iconType: 'playing-card',
          content: {},
          width: 520,
          height: 620,
        })
        break
      case 'photos':
        openWindow({
          title: 'Photos',
          type: 'photos',
          iconType: 'photos',
          content: {},
          width: 560,
          height: 520,
        })
        break
      case 'recycle':
        openWindow({
          title: 'Recycle Bin',
          type: 'recycle',
          iconType: 'recycle-bin',
          content: {
            message: 'Notice how the bin is empty, I am proud of all the apps I have created and how my past work has inspired the development of larger scale apps.',
          },
          width: 420,
          height: 320,
        })
        break
      default:
        break
    }
  }

  return (
    <div className="desktop">
      <DesktopBackground />
      <DesktopIcons projects={systemIcons} isSystem={true} onSystemAction={handleSystemAction} />
      <DesktopIcons projects={desktopProjects} isSystem={false} />
      <WindowManager />
      <Taskbar showStartMenu={showStartMenu} setShowStartMenu={setShowStartMenu} />
      {showStartMenu && (
        <StartMenu
          onClose={() => setShowStartMenu(false)}
          projects={projects}
          portfolioContent={{ hub, aboutMe, skills, interests, contact }}
        />
      )}
    </div>
  )
}
