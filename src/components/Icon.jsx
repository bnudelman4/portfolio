// Pixel art icons in SVG format for Windows 98 style

// Classic Windows System Icons
export function InternetExplorerIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Blue 'e' with orbit */}
      <circle cx="16" cy="16" r="12" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <circle cx="16" cy="16" r="8" fill="none" stroke="#000" strokeWidth="1"/>
      <text x="16" y="20" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="16" fontWeight="bold">e</text>
    </svg>
  )
}

export function MinesweeperIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Gray bomb with fuse */}
      <circle cx="16" cy="18" r="8" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="15" y="4" width="2" height="8" fill="#000"/>
      <circle cx="16" cy="18" r="4" fill="#000"/>
      <rect x="14" y="8" width="4" height="2" fill="#ff0"/>
      <rect x="13" y="26" width="6" height="2" fill="#000"/>
    </svg>
  )
}

export function DocumentsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Yellow folder */}
      <path d="M4 10 L4 26 L28 26 L28 12 L18 12 L16 10 Z" fill="#ffc000" stroke="#000" strokeWidth="1"/>
      <path d="M16 10 L16 12 L4 12 L4 10 Z" fill="#ffd700" stroke="#000" strokeWidth="1"/>
      <rect x="8" y="18" width="12" height="2" fill="#fff" opacity="0.7"/>
      <rect x="8" y="22" width="8" height="2" fill="#fff" opacity="0.7"/>
    </svg>
  )
}

export function NotepadIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* White notepad with lines */}
      <rect x="6" y="4" width="20" height="24" fill="#fff" stroke="#000" strokeWidth="1"/>
      <rect x="8" y="6" width="16" height="18" fill="#fff"/>
      <line x1="8" y1="10" x2="24" y2="10" stroke="#000" strokeWidth="1"/>
      <line x1="8" y1="14" x2="24" y2="14" stroke="#000" strokeWidth="1"/>
      <line x1="8" y1="18" x2="24" y2="18" stroke="#000" strokeWidth="1"/>
      <line x1="8" y1="22" x2="20" y2="22" stroke="#000" strokeWidth="1"/>
      <circle cx="23" cy="7" r="1.5" fill="#ff0000"/>
      <line x1="6" y1="8" x2="9" y2="8" stroke="#000" strokeWidth="2"/>
    </svg>
  )
}

export function RecycleBinIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Gray recycle bin */}
      <rect x="8" y="10" width="16" height="16" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      <rect x="10" y="12" width="12" height="12" fill="#d4d0c8" stroke="#808080" strokeWidth="1"/>
      <rect x="6" y="8" width="20" height="4" fill="#808080" stroke="#000" strokeWidth="1"/>
      <path d="M8 12 L12 8 L10 12 L12 12 Z" fill="#000"/>
      <path d="M24 12 L20 8 L22 12 L20 12 Z" fill="#000"/>
      <rect x="14" y="18" width="4" height="6" fill="#808080"/>
      <rect x="12" y="20" width="8" height="2" fill="#808080"/>
    </svg>
  )
}

// Project Icons with transparent backgrounds
export function ECommerceIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Shopping cart - pixelated with transparent bg */}
      <rect x="4" y="20" width="18" height="2" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="4" y="22" width="2" height="6" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="20" y="20" width="2" height="6" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="6" y="16" width="14" height="2" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="8" y="12" width="10" height="2" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="10" y="8" width="6" height="2" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="12" y="6" width="2" height="2" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <circle cx="22" cy="10" r="3" fill="#ff6600" stroke="#000" strokeWidth="1"/>
      <text x="22" y="12" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="6" fontWeight="bold">$</text>
    </svg>
  )
}

export function MLIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Robot head - pixelated */}
      <rect x="8" y="8" width="16" height="16" fill="#008080" stroke="#000" strokeWidth="1"/>
      <rect x="10" y="10" width="4" height="4" fill="#00ffff" stroke="#000" strokeWidth="1"/>
      <rect x="18" y="10" width="4" height="4" fill="#00ffff" stroke="#000" strokeWidth="1"/>
      <rect x="12" y="18" width="8" height="2" fill="#00ffff" stroke="#000" strokeWidth="1"/>
      <rect x="14" y="6" width="4" height="2" fill="#008080" stroke="#000" strokeWidth="1"/>
      <circle cx="14" cy="7" r="0.5" fill="#ff0000"/>
    </svg>
  )
}

export function GameIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Game controller - pixelated */}
      <rect x="8" y="14" width="16" height="8" fill="#800080" stroke="#000" strokeWidth="1"/>
      <rect x="10" y="16" width="4" height="4" fill="#fff" stroke="#000" strokeWidth="1"/>
      <rect x="18" y="16" width="4" height="4" fill="#fff" stroke="#000" strokeWidth="1"/>
      <rect x="6" y="18" width="2" height="4" fill="#800080" stroke="#000" strokeWidth="1"/>
      <rect x="24" y="18" width="2" height="4" fill="#800080" stroke="#000" strokeWidth="1"/>
      <circle cx="12" cy="18" r="1" fill="#000"/>
      <circle cx="20" cy="18" r="1" fill="#000"/>
      <rect x="14" y="12" width="4" height="2" fill="#800080" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

export function DataIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Chart/graph - pixelated */}
      <rect x="6" y="24" width="2" height="2" fill="#006600" stroke="#000" strokeWidth="1"/>
      <rect x="10" y="20" width="2" height="6" fill="#006600" stroke="#000" strokeWidth="1"/>
      <rect x="14" y="16" width="2" height="10" fill="#006600" stroke="#000" strokeWidth="1"/>
      <rect x="18" y="12" width="2" height="14" fill="#006600" stroke="#000" strokeWidth="1"/>
      <rect x="22" y="18" width="2" height="8" fill="#006600" stroke="#000" strokeWidth="1"/>
      <rect x="26" y="22" width="2" height="4" fill="#006600" stroke="#000" strokeWidth="1"/>
      <rect x="6" y="26" width="22" height="2" fill="#000"/>
      <rect x="4" y="6" width="2" height="22" fill="#000"/>
      <line x1="4" y1="6" x2="6" y2="6" stroke="#000" strokeWidth="2"/>
      <line x1="4" y1="12" x2="6" y2="12" stroke="#000" strokeWidth="1"/>
      <line x1="4" y1="18" x2="6" y2="18" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

// Portfolio / My Computer style icon
export function PortfolioIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Folder with star */}
      <path d="M4 8 L4 26 L28 26 L28 14 L16 14 L14 8 Z" fill="#ffc000" stroke="#000" strokeWidth="1"/>
      <path d="M14 8 L14 14 L4 14 L4 8 Z" fill="#ffd700" stroke="#000" strokeWidth="1"/>
      <circle cx="16" cy="18" r="4" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <text x="16" y="20" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="8" fontWeight="bold">B</text>
    </svg>
  )
}

// Settings (gear) icon
export function SettingsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Gear */}
      <circle cx="16" cy="16" r="3" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      <rect x="15" y="4" width="2" height="4" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="15" y="24" width="2" height="4" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="4" y="15" width="4" height="2" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="24" y="15" width="4" height="2" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="8" y="8" width="3" height="3" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="21" y="8" width="3" height="3" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="21" y="21" width="3" height="3" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="8" y="21" width="3" height="3" fill="#808080" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

// Document / .txt file icon
export function DocumentIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      <rect x="6" y="4" width="16" height="24" fill="#fff" stroke="#000" strokeWidth="1"/>
      <rect x="8" y="8" width="12" height="2" fill="#c0c0c0"/>
      <rect x="8" y="12" width="12" height="2" fill="#c0c0c0"/>
      <rect x="8" y="16" width="8" height="2" fill="#c0c0c0"/>
      <path d="M22 4 L22 14 L28 14" fill="#fff" stroke="#000" strokeWidth="1"/>
      <path d="M22 4 L28 10 L28 14" fill="#e8e8e8" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

// Car icon (UniRides)
export function CarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      <rect x="4" y="16" width="24" height="10" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="8" y="12" width="16" height="6" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="10" y="14" width="4" height="4" fill="#87ceeb" stroke="#000" strokeWidth="1"/>
      <rect x="18" y="14" width="4" height="4" fill="#87ceeb" stroke="#000" strokeWidth="1"/>
      <circle cx="10" cy="26" r="3" fill="#333" stroke="#000" strokeWidth="1"/>
      <circle cx="22" cy="26" r="3" fill="#333" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

// In21 icon (number 21)
export function In21Icon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      <text x="16" y="22" textAnchor="middle" fill="#0066cc" fontFamily="Arial" fontSize="20" fontWeight="bold">21</text>
    </svg>
  )
}

// Computer / monitor icon (About Me)
export function ComputerIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      <rect x="2" y="4" width="28" height="18" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      <rect x="4" y="6" width="24" height="14" fill="#000"/>
      <rect x="6" y="8" width="20" height="10" fill="#008080"/>
      <rect x="8" y="24" width="16" height="4" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="12" y="26" width="8" height="2" fill="#505050" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

// SimplifyCS — laptop / education computer (monitor with book)
export function SimplifyCSIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      {/* Laptop: screen */}
      <rect x="4" y="2" width="24" height="16" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      <rect x="6" y="4" width="20" height="12" fill="#008080"/>
      <rect x="8" y="6" width="6" height="4" fill="#fff" opacity="0.9"/>
      <rect x="8" y="11" width="14" height="2" fill="#fff" opacity="0.6"/>
      {/* Laptop: base */}
      <path d="M2 18 L6 22 L26 22 L30 18 Z" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="12" y="20" width="8" height="2" fill="#505050" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

// Music icon (Music Recommender)
export function MusicIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      <ellipse cx="12" cy="20" rx="3" ry="4" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="14" y="6" width="2" height="14" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="14" y="6" width="8" height="4" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <rect x="20" y="8" width="2" height="12" fill="#0066cc" stroke="#000" strokeWidth="1"/>
      <ellipse cx="21" cy="20" rx="3" ry="4" fill="#0066cc" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

// Photos / camera icon
export function PhotosIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      <rect x="4" y="6" width="24" height="18" rx="2" fill="#fff" stroke="#000" strokeWidth="1"/>
      <circle cx="16" cy="14" r="5" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      <circle cx="16" cy="14" r="3" fill="#333" stroke="#000" strokeWidth="1"/>
      <rect x="14" y="24" width="4" height="2" fill="#808080" stroke="#000" strokeWidth="1"/>
      <rect x="6" y="10" width="4" height="3" fill="#ffc000" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

// Playing card / Games icon (single card: Ace of Hearts)
export function PlayingCardIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
      <rect width="32" height="32" fill="transparent"/>
      <rect x="6" y="4" width="20" height="24" rx="2" fill="#fff" stroke="#000" strokeWidth="1"/>
      <text x="16" y="14" fill="#c00" fontFamily="serif" fontSize="14" fontWeight="bold" textAnchor="middle">A</text>
      <text x="16" y="22" fill="#c00" fontFamily="serif" fontSize="12" textAnchor="middle">♥</text>
    </svg>
  )
}

// Small icon for title bar / taskbar (16px)
export function WindowIcon({ iconType, size = 16 }) {
  const IconComponent = iconMap[iconType] || iconMap['document']
  if (!IconComponent) return null
  return (
    <span className="window-icon-wrap" style={{ width: size, height: size, display: 'inline-block', flexShrink: 0 }}>
      <IconComponent />
    </span>
  )
}

// Icon mapping (used by WindowIcon; order matters for WindowIcon to see it)
const iconMap = {
  'portfolio': PortfolioIcon,
  'internet-explorer': InternetExplorerIcon,
  'minesweeper': MinesweeperIcon,
  'documents': DocumentsIcon,
  'notepad': NotepadIcon,
  'recycle-bin': RecycleBinIcon,
  'settings': SettingsIcon,
  'document': DocumentIcon,
  'car': CarIcon,
  'in21': In21Icon,
  'computer': ComputerIcon,
  'simplifycs': SimplifyCSIcon,
  'music': MusicIcon,
  'playing-card': PlayingCardIcon,
  'photos': PhotosIcon,
  'ecommerce': ECommerceIcon,
  'ml': MLIcon,
  'game': GameIcon,
  'data': DataIcon,
}
