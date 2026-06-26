# Robin Petr — IT Services Website

A personal portfolio and business website built to present my IT skills and
the managed IT services I provide to small and medium businesses — complete IT
support without the need for an in-house IT department.

🔗 **Live demo:** _coming soon_

## ✨ What it offers

- **Hero section** with a clear value proposition and call to action
- **Services section** — managed IT, hardware supply, and support for shops and small firms
- **Sticky frosted-glass navigation** that stays accessible while scrolling
- **Fully responsive layout** — the service cards reflow from 3 → 2 → 1 columns automatically
- Planned: About section, contact section, and a **CZ / EN language switch**

## 🛠️ Tech stack

- [React](https://react.dev/) — component-based UI
- [Vite](https://vite.dev/) — fast dev server and build tool
- Plain CSS with custom properties (design tokens) — no UI framework, built from scratch

## 🚀 Getting started

You need [Node.js](https://nodejs.org/) installed (developed on v24).

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open the printed URL (usually http://localhost:5173)
```

To create an optimized production build:

```bash
npm run build      # output goes to /dist
npm run preview    # preview the production build locally
```

## 📁 Project structure

```
mujweb/
├── index.html          # single HTML entry point
├── vite.config.js      # Vite configuration
├── package.json        # project info, scripts and dependencies
└── src/
    ├── main.jsx        # React entry — mounts the app into #root
    ├── App.jsx         # the website itself (all sections)
    └── index.css       # global styles and design tokens
```

## 👤 Author

**Robin Petr** — student and aspiring IT entrepreneur.

- 📧 robin.petr523@gmail.com
- 📷 Instagram: [@petr.robin](https://instagram.com/petr.robin)
