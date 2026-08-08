# ◆ Iron Man Portfolio — Sai Teja Srikakulapu

A dynamic, animated personal portfolio built with **React + Vite**, themed after Tony Stark's
**arc reactor / JARVIS HUD** — hot-rod red, arc-reactor gold, and repulsor cyan on charcoal.

## ✨ Features

- **Fully dynamic** — every section renders from a single data file: [`src/data/portfolioData.js`](src/data/portfolioData.js). Edit that one file to update the whole site.
- **Iron Man / JARVIS theme** — animated arc reactor, HUD corner brackets, tech grid overlay, Orbitron display font.
- **Animations** (via [Framer Motion](https://www.framer.com/motion/)):
  - Typewriter role cycling in the hero
  - Scroll-reveal for every section
  - Animated skill proficiency bars
  - Count-up stat cameras
  - 3D tilt-on-hover project cards
  - Canvas "repulsor field" particle background
  - Custom repulsor-glow cursor
  - Scroll-progress arc bar + scroll-spy navbar
- **Responsive** with a mobile slide-in menu, and respects `prefers-reduced-motion`.

## 🚀 Getting started

```bash
npm install     # install dependencies
npm run dev     # start dev server (opens http://localhost:3000)
npm run build   # production build -> dist/
npm run preview # preview the production build
```

## 🗂️ Structure

```
Portfolio/
├── index.html                 # entry HTML + Google Fonts + favicon
├── vite.config.js
├── package.json
├── public/
│   └── arc-reactor.svg         # favicon
└── src/
    ├── main.jsx                # React entry
    ├── App.jsx                 # composition of all sections
    ├── index.css               # Iron Man design system + all styles
    ├── data/
    │   └── portfolioData.js     # 🔧 EDIT ME — all content lives here
    └── components/
        ├── Navbar.jsx  Hero.jsx  ArcReactor.jsx
        ├── About.jsx  Skills.jsx  Experience.jsx  Projects.jsx
        ├── Education.jsx  Certifications.jsx  Contact.jsx  Footer.jsx
        ├── ParticleBackground.jsx  CustomCursor.jsx  ScrollProgress.jsx
        └── Reveal.jsx  SectionHeading.jsx  CountUp.jsx
```

## 🎨 Customizing

- **Content:** edit [`src/data/portfolioData.js`](src/data/portfolioData.js).
- **Colors / fonts:** tweak the CSS variables at the top of [`src/index.css`](src/index.css).
- **Résumé button:** set `profile.resumeUrl` in the data file to a hosted PDF link.
