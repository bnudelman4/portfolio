import { useState } from 'react'
import { useWindows } from '../contexts/WindowContext'
import '../styles/WindowContent.css'

// Project window (Overview, Code, Demo tabs)
function ProjectContent({ project }) {
  const [activeTab, setActiveTab] = useState('overview')
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'code', label: 'Code' },
    { id: 'demo', label: 'Demo' },
  ]

  return (
    <div className="window-content-wrapper">
      <div className="window-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`window-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="window-tab-content">
        {activeTab === 'overview' && (
          <div className="overview-content">
            <div className="project-header">
              <h2 className="project-title">{project.name}</h2>
              {project.timeframe && (
                <p className="project-timeframe">{project.timeframe}</p>
              )}
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-info">
              <div className="info-section">
                <h3>Technologies</h3>
                <div className="tech-tags">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="info-section">
                <h3>Features</h3>
                <ul className="features-list">
                  {project.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              {(project.github || project.live) && (
                <div className="info-section">
                  <h3>Links</h3>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-button">
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-button">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === 'code' && (
          <div className="code-content">
            <pre className="code-block"><code>{project.code || '// No code available'}</code></pre>
          </div>
        )}
        {activeTab === 'demo' && project.demo ? (
          <div className="demo-content">
            <iframe src={project.demo} className="demo-iframe" title={`${project.name} Demo`} />
          </div>
        ) : activeTab === 'demo' ? (
          <div className="demo-content no-demo">
            <p>No demo available.</p>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-button">View Live Site</a>
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

// Content window (Skills, Interests, About – section-based)
function ContentView({ data }) {
  if (!data) return null
  return (
    <div className="window-content-wrapper content-window">
      <div className="window-tab-content">
        <div className="content-page">
          <h2 className="content-page-title">{data.title}</h2>
          {data.intro && <p className="content-intro">{data.intro}</p>}
          {data.paragraphs?.map((p, i) => (
            <p key={i} className="content-p">{p}</p>
          ))}
          {data.categories?.map((cat, i) => (
            <div key={i} className="content-section">
              <h3>{cat.name}</h3>
              <ul className="content-list">
                {cat.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          {data.items && (
            <ul className="content-list content-list-standalone">
              {data.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

// Contact window
function ContactView({ data }) {
  if (!data) return null
  return (
    <div className="window-content-wrapper content-window">
      <div className="window-tab-content">
        <div className="content-page contact-page">
          <h2 className="content-page-title">{data.title}</h2>
          <p className="content-intro">{data.message}</p>
          {data.email && (
            <p className="contact-email">
              <a href={`mailto:${data.email}`} className="link-button">{data.email}</a>
            </p>
          )}
          <div className="contact-links">
            {data.links?.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="link-button">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Hub window – Welcome with buttons to open other windows
function HubView({ hubData, onOpen, showWelcomeNote }) {
  if (!hubData) return null
  return (
    <div className="window-content-wrapper content-window hub-window">
      <div className="window-tab-content">
        <div className="content-page hub-page">
          <h2 className="content-page-title">{hubData.title}</h2>
          <p className="content-intro">{hubData.intro}</p>
          <p className="hub-subtitle">{hubData.subtitle}</p>
          <div className="hub-buttons">
            {onOpen.projects && (
              <button className="hub-btn" onClick={() => onOpen.projects()}>Projects</button>
            )}
            {onOpen.skills && (
              <button className="hub-btn" onClick={() => onOpen.skills()}>Skills & Experience</button>
            )}
            {onOpen.contact && (
              <button className="hub-btn" onClick={() => onOpen.contact()}>Contact</button>
            )}
            {onOpen.interests && (
              <button className="hub-btn" onClick={() => onOpen.interests()}>Interests</button>
            )}
            {onOpen.about && (
              <button className="hub-btn" onClick={() => onOpen.about()}>About Me</button>
            )}
          </div>
          {showWelcomeNote && (
            <p className="hub-welcome-note">
              Open Contact via Internet Explorer. Click other desktop icons to open Projects, About Me, Documents, Resume, Settings, Games, and Photos.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const PHOTOS_SLIDES = [
  { type: 'image', src: '/ben.png', caption: 'A picture of me.' },
  { type: 'video', src: '/IMG_4526.MOV', caption: 'A proud moment of me benching 215 pounds last year.' },
]

function PhotosView() {
  const [index, setIndex] = useState(0)
  const slide = PHOTOS_SLIDES[index]
  const goPrev = () => setIndex((i) => (i - 1 + PHOTOS_SLIDES.length) % PHOTOS_SLIDES.length)
  const goNext = () => setIndex((i) => (i + 1) % PHOTOS_SLIDES.length)

  return (
    <div className="window-content-wrapper content-window photos-window">
      <div className="window-tab-content">
        <div className="photos-viewer">
          <button type="button" className="photos-arrow photos-arrow-left" onClick={goPrev} aria-label="Previous">
            ‹
          </button>
          <div className="photos-media">
            {slide.type === 'image' ? (
              <img src={slide.src} alt="" className="photos-img" />
            ) : (
              <video src={slide.src} className="photos-video" controls playsInline />
            )}
          </div>
          <button type="button" className="photos-arrow photos-arrow-right" onClick={goNext} aria-label="Next">
            ›
          </button>
        </div>
        <p className="photos-caption">{slide.caption}</p>
      </div>
    </div>
  )
}

export default function WindowContent({ window: win }) {
  const { openWindow } = useWindows()

  if (!win) return null

  const c = win.content || {}
  const hubOpen = {
    projects: () => openWindow({ title: 'Projects', type: 'hub-projects', iconType: 'documents', content: { projects: c.projects || [] }, width: 500, height: 400 }),
    skills: () => openWindow({ title: 'Skills & Experience', type: 'content', iconType: 'settings', content: c.skills, width: 500, height: 450 }),
    contact: () => openWindow({ title: 'Contact', type: 'contact', iconType: 'internet-explorer', content: c.contact, width: 420, height: 320 }),
    interests: () => openWindow({ title: 'Interests', type: 'content', iconType: 'data', content: c.interests, width: 420, height: 320 }),
    about: () => openWindow({ title: 'About Me', type: 'content', iconType: 'computer', content: c.about, width: 500, height: 380 }),
  }

  if (win.type === 'project') {
    return <ProjectContent project={win.content} />
  }
  if (win.type === 'content') {
    return <ContentView data={win.content} />
  }
  if (win.type === 'contact') {
    return <ContactView data={win.content} />
  }
  if (win.type === 'hub') {
    return (
      <HubView
        hubData={{ title: c.title, intro: c.intro, subtitle: c.subtitle }}
        onOpen={hubOpen}
        showWelcomeNote={c.showWelcomeNote}
      />
    )
  }
  if (win.type === 'file-explorer') {
    const list = c.projects || []
    return (
      <div className="window-content-wrapper content-window file-explorer-window">
        <div className="window-tab-content">
          <div className="content-page">
            <h2 className="content-page-title">My Projects</h2>
            <p className="content-intro">Double-click a project to open it.</p>
            <ul className="file-explorer-list">
              <li className="file-explorer-folder">📁 My Projects</li>
              {list.map((p) => (
                <li key={p.id} className="file-explorer-item">
                  <button
                    type="button"
                    className="file-explorer-row"
                    onDoubleClick={() => openWindow({ title: p.name, type: 'project', iconType: p.iconType, content: p, width: 700, height: 550 })}
                  >
                    <span className="file-explorer-icon">📄</span>
                    <span>{p.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  if (win.type === 'resume') {
    const url = c.url || '/Resume.pdf'
    return (
      <div className="window-content-wrapper content-window resume-window">
        <div className="window-tab-content">
          <iframe src={url} className="resume-iframe" title="Resume" />
        </div>
      </div>
    )
  }
  if (win.type === 'recycle') {
    return (
      <div className="window-content-wrapper content-window recycle-window">
        <div className="window-tab-content">
          <div className="recycle-content">
            <div className="recycle-empty-icon" aria-hidden="true">
              <svg width="64" height="64" viewBox="0 0 32 32" className="pixel-icon">
                <rect x="8" y="10" width="16" height="16" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
                <rect x="10" y="12" width="12" height="12" fill="#d4d0c8" stroke="#808080" strokeWidth="1"/>
                <rect x="6" y="8" width="20" height="4" fill="#808080" stroke="#000" strokeWidth="1"/>
              </svg>
            </div>
            <p className="recycle-empty-label">The Recycle Bin is empty.</p>
            <p className="recycle-message">{c.message}</p>
          </div>
        </div>
      </div>
    )
  }
  if (win.type === 'photos') {
    return <PhotosView />
  }
  if (win.type === 'games') {
    return (
      <div className="window-content-wrapper content-window games-window">
        <div className="window-tab-content">
          <div className="games-content">
            <p className="games-intro">
              I enjoy playing poker and understanding some of the math behind it. It builds my idea of tradeoffs, when to push, when to fold, and how odds and psychology interact.
            </p>
            <section className="games-hand-section">
              <h3 className="games-hand-title">Favorite hand: King 8 offsuit</h3>
              <div className="games-cards-row" aria-hidden="true">
                <div className="games-card games-card-red">
                  <div className="games-card-corner games-card-tl"><span className="games-card-cr">K</span><span className="games-card-cs">♦</span></div>
                  <div className="games-card-center">
                    <span className="games-card-rank">K</span>
                    <span className="games-card-suit">♦</span>
                  </div>
                  <div className="games-card-corner games-card-br"><span className="games-card-cr">K</span><span className="games-card-cs">♦</span></div>
                </div>
                <div className="games-card games-card-black">
                  <div className="games-card-corner games-card-tl"><span className="games-card-cr">8</span><span className="games-card-cs">♣</span></div>
                  <div className="games-card-center">
                    <span className="games-card-rank">8</span>
                    <span className="games-card-suit">♣</span>
                  </div>
                  <div className="games-card-corner games-card-br"><span className="games-card-cr">8</span><span className="games-card-cs">♣</span></div>
                </div>
              </div>
              <p className="games-hand-desc">
                My favorite hand despite not being played often. I once found myself folding so many hands that I decided to give this one a go despite being reluctant, and I flopped a full house.
              </p>
            </section>
            <section className="games-hand-section">
              <h3 className="games-hand-title">Least favorite: Pocket jacks</h3>
              <div className="games-cards-row" aria-hidden="true">
                <div className="games-card games-card-black">
                  <div className="games-card-corner games-card-tl"><span className="games-card-cr">J</span><span className="games-card-cs">♠</span></div>
                  <div className="games-card-center">
                    <span className="games-card-rank">J</span>
                    <span className="games-card-suit">♠</span>
                  </div>
                  <div className="games-card-corner games-card-br"><span className="games-card-cr">J</span><span className="games-card-cs">♠</span></div>
                </div>
                <div className="games-card games-card-red">
                  <div className="games-card-corner games-card-tl"><span className="games-card-cr">J</span><span className="games-card-cs">♥</span></div>
                  <div className="games-card-center">
                    <span className="games-card-rank">J</span>
                    <span className="games-card-suit">♥</span>
                  </div>
                  <div className="games-card-corner games-card-br"><span className="games-card-cr">J</span><span className="games-card-cs">♥</span></div>
                </div>
              </div>
              <p className="games-hand-desc">
                Despite any preflop all-in against AK or similar being roughly 50/50, I personally find myself losing almost every time I play with these cards.
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }
  if (win.type === 'hub-projects') {
    const projects = win.content?.projects || []
    return (
      <div className="window-content-wrapper content-window">
        <div className="window-tab-content">
          <div className="content-page">
            <h2 className="content-page-title">Projects</h2>
            <p className="content-intro">Click a project to open it.</p>
            <ul className="hub-project-list">
              {projects.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className="hub-project-link"
                    onClick={() => openWindow({ title: p.name, type: 'project', iconType: p.iconType, content: p, width: 700, height: 550 })}
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return null
}
