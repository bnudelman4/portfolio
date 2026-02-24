# 🌌 Galaxy Portfolio

A stunning 3D portfolio website featuring your projects as planets in a cosmic galaxy. Built with React, Three.js, and React Three Fiber.

![Galaxy Portfolio](https://img.shields.io/badge/React-18.2.0-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.158.0-green)

## ✨ Features

- **🌍 Galaxy Theme**: Projects displayed as planets in a 3D space
- **🖱️ Interactive Planets**: Hover to see project details, click to zoom in
- **🛰️ Orbiting Satellites**: Skills and tools orbit around each project
- **🌙 Moons**: Sub-projects and features shown as orbiting moons
- **☁️ Nebulae**: Category clouds create atmospheric backgrounds
- **⭐ Star Field**: Individual skills represented as stars
- **🔍 Search & Filter**: Find projects by name or category
- **📱 Responsive Design**: Works on desktop and mobile devices
- **🎥 Smooth Camera Transitions**: Automatic camera movement when selecting projects

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Customization

### Adding Your Projects

Edit `src/data/projects.js` to add your own projects. Here's an example:

```javascript
{
  id: 1,
  name: "My Awesome Project",
  description: "A brief description of what this project does",
  complexity: 8, // 1-10 scale (affects planet size)
  techStack: "React",
  color: "#61dafb", // Hex color for the planet
  position: [15, 5, 0], // 3D position [x, y, z] in space
  skills: ["React", "Node.js", "MongoDB", "Express"],
  subProjects: ["Feature 1", "Feature 2", "Feature 3"], // Shows as moons
  category: "Web Development",
  github: "https://github.com/your-username/your-repo",
  live: "https://your-live-site.com" // Optional
}
```

### Tips for Project Placement

- Spread projects out in 3D space (use different x, y, z values)
- Larger complexity values create bigger planets
- Similar categories should be grouped together
- Colors should match your tech stack theme

### Tech Stack Colors

The default colors are defined in `src/data/projects.js`. Customize the `techColors` object:

```javascript
export const techColors = {
  "React": "#61dafb",
  "Python": "#3776ab",
  "Node.js": "#339933",
  // Add your own...
}
```

### Categories

Update the `categories` array to match your project categories. Each category appears as a nebula cloud in the background.

## 🎮 Controls

- **Click & Drag**: Rotate the camera around the scene
- **Scroll**: Zoom in/out
- **Hover Planets**: See project name and details
- **Click Planets**: Zoom to project and show full details
- **Click Project in Sidebar**: Jump to project

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── GalaxyScene.jsx      # Main 3D scene
│   │   ├── ProjectPlanet.jsx    # Individual project planets
│   │   ├── Satellites.jsx       # Orbiting skills
│   │   ├── Moons.jsx            # Sub-projects
│   │   ├── Nebula.jsx           # Category clouds
│   │   ├── StarField.jsx        # Background stars
│   │   ├── CameraController.jsx # Camera transitions
│   │   ├── UI.jsx               # UI overlay
│   │   └── LoadingScreen.jsx    # Loading state
│   ├── contexts/
│   │   └── ProjectContext.jsx   # State management
│   ├── data/
│   │   └── projects.js          # Your project data
│   ├── hooks/
│   │   └── useCameraControls.js # Camera utilities
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
├── package.json
└── vite.config.js
```

## 🛠️ Technologies

- **React 18** - UI framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library (available but not yet used)

## 🎯 Roadmap

Future enhancements:
- [ ] Connection lines between related projects
- [ ] More advanced particle effects
- [ ] Custom shaders for planets
- [ ] Sound effects
- [ ] Keyboard navigation
- [ ] Project preview images
- [ ] Dark/Light theme toggle

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template, but suggestions and improvements are welcome!

## 🙏 Acknowledgments

- Three.js community
- React Three Fiber team
- Inspiration from space-themed designs

