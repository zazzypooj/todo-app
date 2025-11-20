# 🚀 Complete Setup Guide - Vite Todo App

## Step-by-Step Installation

### Step 1: Check Prerequisites

Before starting, make sure you have Node.js installed:

```bash
node --version
```

You should see something like `v18.x.x` or `v16.x.x`

**Don't have Node.js?**
1. Go to https://nodejs.org/
2. Download the LTS version
3. Install it
4. Restart your terminal/command prompt

### Step 2: Navigate to Project

Open terminal/command prompt and go to the project folder:

```bash
cd vite-todo-app
```

### Step 3: Install Dependencies

Install all required packages:

```bash
npm install
```

This will:
- Install React, Vite, Tailwind CSS, and all dependencies
- Create `node_modules` folder
- Take 1-2 minutes

**Expected output:**
```
added 200+ packages in 1m
```

### Step 4: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### Step 5: Open in Browser

Your browser should automatically open to `http://localhost:3000`

**If it doesn't open automatically:**
- Manually open your browser
- Go to `http://localhost:3000`

### Step 6: Success! 🎉

You should see the To-Do List app running!

---

## 🖥️ VS Code Setup (Recommended)

### Install VS Code

1. Download from https://code.visualstudio.com/
2. Install it
3. Open VS Code

### Open Project in VS Code

1. Open VS Code
2. Click `File` → `Open Folder`
3. Select the `vite-todo-app` folder
4. Click `Open`

### Install Recommended Extensions

Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) and install:

1. **ES7+ React/Redux/React-Native snippets**
   - Quick React snippets
   
2. **Tailwind CSS IntelliSense**
   - Autocomplete for Tailwind classes
   
3. **Prettier - Code formatter**
   - Auto-format your code
   
4. **ESLint**
   - Find and fix code issues

### Open Terminal in VS Code

Press `` Ctrl+` `` (backtick) or:
- Click `Terminal` → `New Terminal`

Now you can run all commands directly in VS Code!

---

## 📋 Common Commands

### Development

```bash
# Start dev server
npm run dev

# Stop dev server (in terminal)
Ctrl + C
```

### Building

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Maintenance

```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# Clear cache (if needed)
rm -rf node_modules .vite
npm install
```

---

## 🐛 Troubleshooting

### Problem: "npm: command not found"
**Solution:** Node.js is not installed or not in PATH
- Install Node.js from https://nodejs.org/
- Restart terminal/computer

### Problem: Port 3000 already in use
**Solution:** Another app is using port 3000
```bash
# Option 1: Stop other app using port 3000
# Option 2: Use different port
npm run dev -- --port 3001
```

### Problem: Module not found errors
**Solution:** Dependencies not installed properly
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: Styles not working
**Solution:** Tailwind not configured properly
1. Check `src/index.css` has:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
2. Restart dev server

### Problem: Changes not reflecting
**Solution:**
1. Save file (Ctrl+S)
2. Hard refresh browser (Ctrl+Shift+R)
3. If still not working, restart dev server

### Problem: Build fails
**Solution:**
```bash
# Clear everything and start fresh
rm -rf node_modules dist .vite
npm install
npm run build
```

---

## 🎯 Development Workflow

### Daily Development

1. **Open VS Code** with project folder
2. **Open Terminal** (Ctrl+`)
3. **Start dev server:** `npm run dev`
4. **Edit files** in `src/` folder
5. **Save** (Ctrl+S) - browser auto-refreshes!
6. **Stop server** when done (Ctrl+C)

### Making Changes

**Want to modify UI?**
- Edit files in `src/components/`

**Want to change task logic?**
- Edit `src/hooks/useTasks.js`

**Want to change colors?**
- Edit `tailwind.config.js`

**Want to add utilities?**
- Add to `src/utils/`

---

## 🔧 Project Configuration

### Vite Config (`vite.config.js`)
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,        // Change port here
    open: true         // Auto-open browser
  }
})
```

### Tailwind Config (`tailwind.config.js`)
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",  // Files to scan for classes
  ],
  theme: {
    extend: {
      // Add custom colors/styles here
    },
  },
}
```

---

## 📦 Understanding node_modules

After `npm install`, you'll see a `node_modules` folder.

**What is it?**
- Contains all installed packages
- ~200MB in size
- Can always be regenerated with `npm install`

**Should I commit it to Git?**
- ❌ No! It's in `.gitignore`
- ✅ Only commit `package.json`
- Others can run `npm install` to get dependencies

---

## 🚀 Building for Production

### Create Production Build

```bash
npm run build
```

This creates a `dist/` folder with:
- Minified JavaScript
- Optimized CSS
- Compressed assets
- Ready-to-deploy files

### Preview Production Build

```bash
npm run preview
```

Opens production build at `http://localhost:4173`

### Deploy

**Option 1: Netlify**
1. Run `npm run build`
2. Drag `dist` folder to Netlify

**Option 2: Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

**Option 3: GitHub Pages**
1. Install: `npm i -g gh-pages`
2. Build: `npm run build`
3. Deploy: `gh-pages -d dist`

---

## 💡 Pro Tips

### VS Code Shortcuts

- `Ctrl+P` - Quick file search
- `Ctrl+Shift+F` - Find in all files
- `Ctrl+B` - Toggle sidebar
- `Ctrl+`` ` `` - Toggle terminal
- `F2` - Rename symbol
- `Alt+Up/Down` - Move line up/down

### Development Tips

1. **Save often** - Changes appear instantly
2. **Use console** - `console.log()` for debugging
3. **Check terminal** - Errors show here
4. **Use React DevTools** - Browser extension for debugging

### Performance

- Vite is FAST because it uses native ES modules
- No bundling in development
- Only bundles for production

---

## 🎓 Next Steps

### Learn the Codebase

1. Start with `src/App.jsx` - main component
2. Look at `src/components/` - all UI components
3. Check `src/hooks/useTasks.js` - state management
4. Review `src/utils/dateUtils.js` - helper functions

### Customize

1. Change colors in `tailwind.config.js`
2. Add new components in `src/components/`
3. Modify task logic in `useTasks` hook
4. Add new utility functions

### Deploy

1. Build: `npm run build`
2. Test: `npm run preview`
3. Deploy to Netlify/Vercel
4. Share your app!

---

## 📚 Learning Resources

- **Vite:** https://vitejs.dev/guide/
- **React:** https://react.dev/learn
- **Tailwind:** https://tailwindcss.com/docs
- **JavaScript:** https://javascript.info/

---

## ✅ Setup Checklist

Before you start coding:
- [ ] Node.js installed (v14+)
- [ ] Project folder downloaded
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] VS Code set up (optional but recommended)
- [ ] Browser showing app at localhost:3000

---

**You're all set! Happy coding!** 🎉

If you run into issues, check the troubleshooting section above.
