import { useWindows } from '../contexts/WindowContext'
import '../styles/StartMenu.css'

export default function StartMenu({ onClose, projects, portfolioContent }) {
  const { openWindow } = useWindows()
  const { hub, aboutMe, skills, interests, contact } = portfolioContent || {}

  const openHub = () => {
    openWindow({
      title: "Ben's Portfolio",
      type: 'hub',
      iconType: 'portfolio',
      content: { ...hub, skills, contact, interests, about: aboutMe, projects },
      width: 420,
      height: 380,
    })
    onClose()
  }

  const openProjects = () => {
    openWindow({
      title: 'Projects',
      type: 'hub-projects',
      iconType: 'documents',
      content: { projects },
      width: 500,
      height: 400,
    })
    onClose()
  }

  const openSkills = () => {
    openWindow({
      title: 'Skills & Experience',
      type: 'content',
      iconType: 'settings',
      content: skills,
      width: 500,
      height: 450,
    })
    onClose()
  }

  const openContact = () => {
    openWindow({
      title: 'Contact',
      type: 'contact',
      iconType: 'internet-explorer',
      content: contact,
      width: 420,
      height: 320,
    })
    onClose()
  }

  const openInterests = () => {
    openWindow({
      title: 'Interests',
      type: 'content',
      iconType: 'data',
      content: interests,
      width: 420,
      height: 320,
    })
    onClose()
  }

  const openAbout = () => {
    openWindow({
      title: 'About Me',
      type: 'content',
      iconType: 'computer',
      content: aboutMe,
      width: 500,
      height: 380,
    })
    onClose()
  }

  const handleProjectClick = (project) => {
    openWindow({
      title: project.name,
      type: 'project',
      iconType: project.iconType,
      content: project,
      width: 700,
      height: 550,
    })
    onClose()
  }

  return (
    <>
      <div className="start-menu-overlay" onClick={onClose} />
      <div className="start-menu">
        <div className="start-menu-header">
          <span className="start-menu-title">ben's portfoliOS</span>
        </div>
        <div className="start-menu-content">
          <div className="start-menu-section">
            <div className="menu-section-title">Portfolio</div>
            <div className="menu-item" onClick={openHub}>
              <span className="menu-icon">📁</span>
              <span>Welcome</span>
            </div>
            <div className="menu-item" onClick={openProjects}>
              <span className="menu-icon">📂</span>
              <span>Projects</span>
            </div>
            <div className="menu-item" onClick={openSkills}>
              <span className="menu-icon">📋</span>
              <span>Skills & Experience</span>
            </div>
            <div className="menu-item" onClick={openContact}>
              <span className="menu-icon">✉️</span>
              <span>Contact</span>
            </div>
            <div className="menu-item" onClick={openInterests}>
              <span className="menu-icon">📄</span>
              <span>Interests</span>
            </div>
            <div className="menu-item" onClick={openAbout}>
              <span className="menu-icon">📝</span>
              <span>About Me</span>
            </div>
            <div className="menu-divider" />
          </div>

          <div className="start-menu-section">
            <div className="menu-section-title">Projects</div>
            {projects.map((project) => (
              <div
                key={project.id}
                className="menu-item"
                onClick={() => handleProjectClick(project)}
              >
                <span className="menu-icon">📦</span>
                <span>{project.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="start-menu-footer">
          <div className="menu-item" onClick={() => window.location.reload()}>
            <span className="menu-icon">🚪</span>
            <span>Shut Down...</span>
          </div>
        </div>
      </div>
    </>
  )
}
