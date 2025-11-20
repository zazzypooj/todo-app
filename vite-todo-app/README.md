# 📱 To-Do List App - Vite + React + Tailwind

A beautiful, modern mobile-first to-do list application built with **Vite**, **React 18**, and **Tailwind CSS**.

## ✨ Features

### Core Functionality
- ✅ Create, edit, and delete tasks
- ✅ Search tasks by title or description
- ✅ Mark tasks as complete
- ✅ Priority levels (High, Medium, Low)
- ✅ Status tracking (Open, In Progress, Completed)

### Organization
- ✅ Weekly task grouping (Monday-Sunday)
- ✅ Today's tasks view
- ✅ Task statistics dashboard
- ✅ Progress visualization
- ✅ Beautiful mobile-optimized UI

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) version 14 or higher
- npm (comes with Node.js)

### Installation

1. **Navigate to project directory:**
   ```bash
   cd vite-todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - App will open automatically at `http://localhost:3000`

That's it! Your app is now running! 🎉

## 📜 Available Scripts

### `npm run dev`
Starts the development server with hot reload.
- Opens at: `http://localhost:3000`
- Auto-reloads on file changes

### `npm run build`
Builds the app for production to the `dist/` folder.
- Optimizes and minifies all files
- Ready for deployment

### `npm run preview`
Preview the production build locally before deploying.

## 📁 Project Structure

```
vite-todo-app/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Home/       # Home screen components
│   │   │   ├── HomeScreen.jsx
│   │   │   ├── HomeHeader.jsx
│   │   │   ├── TodaysTasks.jsx
│   │   │   └── SearchResults.jsx
│   │   ├── NewTask/    # New task screen
│   │   │   └── NewTaskScreen.jsx
│   │   ├── TaskList/   # Task list screen
│   │   │   ├── TaskListScreen.jsx
│   │   │   └── WeekItem.jsx
│   │   ├── Onboarding/ # Onboarding screen
│   │   │   └── OnboardingScreen.jsx
│   │   └── common/     # Reusable components
│   │       ├── TaskCard.jsx
│   │       ├── WeekCalendar.jsx
│   │       ├── WeeklyProgress.jsx
│   │       ├── TaskStats.jsx
│   │       └── SearchBar.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useTasks.js
│   ├── utils/          # Utility functions
│   │   └── dateUtils.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## 🎨 Key Components

### Pages/Screens
- **HomeScreen** - Main dashboard with today's tasks
- **NewTaskScreen** - Create/edit task form
- **TaskListScreen** - View all tasks by week
- **OnboardingScreen** - Welcome screen

### Reusable Components
- **TaskCard** - Individual task display
- **WeekCalendar** - Week date selector
- **WeeklyProgress** - Progress bar visualization
- **TaskStats** - Task statistics cards
- **SearchBar** - Search input component

### Custom Hooks
- **useTasks** - Manages all task state and operations

### Utilities
- **dateUtils** - Date formatting and calculations

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Vite | 5.0.8 | Build tool & dev server |
| React | 18.2.0 | UI framework |
| Tailwind CSS | 3.3.6 | Styling |
| Lucide React | 0.263.1 | Icons |
| PostCSS | 8.4.32 | CSS processing |

## 🎯 Component Architecture

The app uses a **component-based architecture** with:
- **Presentational components** (UI only)
- **Container components** (logic + UI)
- **Custom hooks** for state management
- **Utility functions** for reusable logic

## 💡 Development Tips

### Making Changes

1. **Edit components** in `src/components/`
2. **Save file** (Ctrl/Cmd + S)
3. **Browser auto-refreshes** - see changes instantly!

### Common Tasks

**Change colors:**
- Edit `tailwind.config.js`

**Add new component:**
- Create file in appropriate folder
- Import in parent component

**Modify task logic:**
- Edit `src/hooks/useTasks.js`

**Change date formatting:**
- Edit `src/utils/dateUtils.js`

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in vite.config.js or use:
npm run dev -- --port 3001
```

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### Styles not applying
- Make sure Tailwind directives are in `src/index.css`
- Restart dev server

## 📦 Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build outputs to the `dist/` folder, ready for deployment!

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## 🎓 Learning Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## ⚡ Why Vite?

Vite offers:
- ⚡ Lightning-fast HMR (Hot Module Replacement)
- 📦 Optimized builds
- 🔧 Simple configuration
- 🚀 Better development experience
- 💡 Modern tooling

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      blue: {
        600: '#your-color',
      },
    },
  },
}
```

### Add New Features
1. Create component in appropriate folder
2. Add logic to `useTasks` hook if needed
3. Import and use in `App.jsx`

## 📝 Code Style

This project follows:
- **Component naming**: PascalCase
- **File naming**: PascalCase for components
- **Props destructuring**: Always destructure props
- **Hooks**: Use custom hooks for complex logic
- **Comments**: Only for complex logic

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this project however you'd like!

## 🙏 Acknowledgments

- Design inspired by modern mobile task managers
- Icons by [Lucide](https://lucide.dev/)
- Built with ❤️ using Vite + React + Tailwind

---

**Happy Coding!** 🚀

For questions or issues, please check the troubleshooting section or create an issue.
