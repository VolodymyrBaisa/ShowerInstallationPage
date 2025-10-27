# Unic Shower Surrounds Landing Page

A premium single-page React experience inspired by UnicTiles.com and modern tile studios, tailored for marketing professional shower surround installation services.

## Tech Stack
- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) for a fast, component-based SPA
- [Framer Motion](https://www.framer.com/motion/) for scroll-triggered animations
- [react-scroll](https://www.npmjs.com/package/react-scroll) for smooth in-page navigation
- Modern CSS with custom gradients, glassmorphism, and responsive layout system

## Getting Started
```bash
npm install
npm run dev
```
Visit `http://localhost:5173` to explore the page locally.

### Production Build
```bash
npm run build
```
The optimized assets will be generated in the `dist/` directory. The post-build step strips CORS-related attributes so you can
open `dist/index.html` directly from disk (e.g., double-clicking the file) without seeing a blank page. For a local server
preview, run `npm run preview` instead.
