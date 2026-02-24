import { useWindows } from '../contexts/WindowContext'
import { 
  ECommerceIcon, MLIcon, GameIcon, DataIcon,
  InternetExplorerIcon, MinesweeperIcon, DocumentsIcon, NotepadIcon, RecycleBinIcon,
  PortfolioIcon, SettingsIcon, DocumentIcon,
  CarIcon, In21Icon, ComputerIcon, SimplifyCSIcon, MusicIcon, PlayingCardIcon, PhotosIcon
} from './Icon'
import '../styles/DesktopIcons.css'

const iconComponents = {
  'portfolio': PortfolioIcon,
  'ecommerce': ECommerceIcon,
  'ml': MLIcon,
  'game': GameIcon,
  'data': DataIcon,
  'car': CarIcon,
  'in21': In21Icon,
  'computer': ComputerIcon,
  'simplifycs': SimplifyCSIcon,
  'music': MusicIcon,
  'playing-card': PlayingCardIcon,
  'photos': PhotosIcon,
  'internet-explorer': InternetExplorerIcon,
  'minesweeper': MinesweeperIcon,
  'documents': DocumentsIcon,
  'notepad': NotepadIcon,
  'recycle-bin': RecycleBinIcon,
  'settings': SettingsIcon,
  'document': DocumentIcon,
}

export default function DesktopIcons({ projects, isSystem = false, onSystemAction }) {
  const { openWindow } = useWindows()

  const handleDoubleClick = (item) => {
    if (isSystem && item.action && onSystemAction) {
      onSystemAction(item.action)
      return
    }
    if (isSystem) return
    openWindow({
      title: item.name,
      type: 'project',
      iconType: item.iconType,
      content: item,
      width: 700,
      height: 550,
    })
  }

  return (
    <div className="desktop-icons">
      {projects.map((project, index) => {
        const IconComponent = iconComponents[project.iconType] || ECommerceIcon
        const x = project.x !== undefined ? project.x : (10 + (index % 4) * 100)
        const y = project.y !== undefined ? project.y : (20 + Math.floor(index / 4) * 100)
        
        return (
          <div
            key={project.id || project.name}
            className="desktop-icon"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
            onDoubleClick={() => handleDoubleClick(project)}
          >
            <div className="icon-image transparent-icon">
              <IconComponent />
            </div>
            <div className="icon-label">{project.name}</div>
          </div>
        )
      })}
    </div>
  )
}
