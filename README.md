<div align="center">

# :rocket: Rishi Sharma — Portfolio OS v2.7.0

### *"Building the Future One Line of Code"*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-rishisharma029.github.io%2Fportfolio-6ee7b7?style=for-the-badge&logo=github&logoColor=black)](https://rishisharma029.github.io/portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-Rishisharma029-white?style=for-the-badge&logo=github&logoColor=black)](https://github.com/Rishisharma029)
[![Email](https://img.shields.io/badge/Email-i.rishisharma2007%40gmail.com-6ee7b7?style=for-the-badge&logo=gmail&logoColor=black)](mailto:i.rishisharma2007@gmail.com)

</div>

---

## :milky_way: About

A **cinematic, Awwwards-level personal portfolio** built entirely with CDN-only React 18, Framer Motion, and Tailwind CSS — no build step required. Designed with a dark, futuristic **control-panel aesthetic** featuring liquid-glass morphism, particle backgrounds, and a full "Portfolio OS" auth sequence on load.

> :dizzy: **Designed to feel more like an experience than a traditional portfolio.**

---

## :sparkles: Features

### :lock: Auth Intro Sequence
- Full-screen cinematic loader on every visit
- Typewriter animation: `Authenticating user... 100%`
- Text flips green: `Identity Verified`
- Large italic serif reveal: **"Access Granted."**

### :clock1: Live System Clock
- Fixed top-right corner: **SYSTEM ONLINE**
- Real-time IST clock updating every second
- Pulsing green dot indicator

### :busts_in_silhouette: Multiplayer Cursor Mode
- **Real cross-tab sync** via `BroadcastChannel` API — open two tabs and see each other's cursors live
- 2 simulated ghost visitors (`anon_42`, `v_0x7f`) with smooth bezier movement
- Live **visitor counter** in the top-left

### :no_entry: Classified Project Card
- Locked card with redacted text and red accent border
- Click it — green scanline sweeps across — glitch animation — **"Project Phantom"** revealed
- Pulsing `CLICK TO REQUEST ACCESS` CTA

### :scroll: Progressive Scroll Unlock
- **Timeline** and **About** sections start behind a `[ CLASSIFIED ]` overlay
- Scroll 25% into the section — green light sweep — content unlocks

### :computer: Interactive Terminal
- Fake CLI with `whoami`, `skills`, `projects` commands
- Typewriter responses, blinking cursor

### :eyes: DevTools Easter Egg
- Open DevTools (F12) — **site goes black** with `Access Restricted.` overlay
- Console prints styled hire-me messages
- Detects Chrome, Edge, Firefox and Safari

### :star2: Other Highlights
- 60-particle canvas background with connecting lines
- Custom cursor with glow trail
- Magnetic buttons (hover pulls them toward your cursor)
- Animated tech stack cards (React, Node, Python, Next.js, Linux, Git)
- Counting stats, alternating timeline, FAQ accordion
- Smooth scroll and section entrance animations

---

## :hammer_and_wrench: Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 (CDN, no build step) |
| **Animations** | Framer Motion 11 |
| **Styling** | Tailwind CSS (CDN) + Vanilla CSS |
| **Transpiler** | Babel Standalone |
| **Fonts** | Instrument Serif, Barlow, JetBrains Mono |
| **Real-time** | BroadcastChannel API |
| **Hosting** | GitHub Pages |

---

## :file_folder: Project Structure

```
portfolio/
|-- index.html                  # App shell, auth loader, CDN imports, DevTools easter egg
|-- rishi-portfolio.html        # Standalone single-file build (all JS inlined)
|-- rishi-portfolio.zip         # Portable zip -- drag to Netlify to deploy instantly
|
|-- src/
|   |
|   |-- components/
|   |   |-- core.js             # FadingVideo, BlurText, ScrollReveal, AnimatedCounter
|   |   |                       # MagneticButton, ArrowUpRight, ChevronDown, all Icons
|   |   |-- GhostCursors        # Real BroadcastChannel sync + simulated visitors
|   |   |-- ClassifiedReveal    # Locked section overlay with scan-sweep unlock
|   |   |-- CustomCursor        # Dot + ring cursor with glow trail canvas
|   |   |-- ParticleSystem      # 60-particle canvas with connecting lines
|   |   `-- LiveClock           # IST real-time clock + SYSTEM ONLINE indicator
|   |
|   |-- pages/
|   |   |-- sec1.js             # Navbar, HeroSection, CapSection (Projects)
|   |   |-- sec2.js             # TechSection, Terminal, StatsSection
|   |   `-- sec3.js             # TimelineSection, AboutSection, FAQ, ContactSection
|   |
|   |-- assets/
|   |   `-- screenshots/        # Preview images
|   |
|   |-- animations/
|   |   |-- LoadingScreen       # Auth sequence: typewriter + progress bar + reveal
|   |   |-- ClassifiedCard      # Scanline glitch unlock on click
|   |   `-- BlurText            # Word-by-word blur-in entrance animation
|   |
|   `-- styles/
|       `-- index.html          # Liquid-glass CSS, cursor styles, loader styles,
|                               # keyframes: scanmove, pulse-dot, sweep-reveal
```

---

## :rocket: Run Locally

```bash
# Clone the repo
git clone https://github.com/Rishisharma029/portfolio.git
cd portfolio

# Serve with any static server
npx serve .

# Or with Python
python -m http.server 3000
```

Then open `http://localhost:3000`

> Must be served over HTTP — `file://` will not work due to module loading.

---

## :zap: One-Click Deploy

| Platform | Method |
|---|---|
| **Netlify** | Drag `rishi-portfolio.zip` to [app.netlify.com/drop](https://app.netlify.com/drop) |
| **GitHub Pages** | Already live at the link above |
| **Vercel** | Import this repo at [vercel.com/new](https://vercel.com/new) |

---

## :bar_chart: My Journey

| Year | Milestone |
|---|---|
| **2023** | Started coding |
| **2025** | Completed 12th, Joined BCA |
| **2026** | Building production-ready projects |
| **2026+** | 5+ real-world projects, 7 hackathons, Cybersecurity focus |

---

## :mailbox: Contact

- **Email:** [i.rishisharma2007@gmail.com](mailto:i.rishisharma2007@gmail.com)
- **Instagram:** [@_rishi_sharma28](https://instagram.com/_rishi_sharma28)
- **GitHub:** [Rishisharma029](https://github.com/Rishisharma029)
- **LinkedIn:** [rishi-sharma-169735381](https://www.linkedin.com/in/rishi-sharma-169735381/)
- **College:** BCA -- Satyug Darshan Institute of Engineering and Technology (2025-2028)

---

## :map: Roadmap

- [ ] Real multiplayer cursors via Supabase Realtime
- [ ] AI chatbot (ask Rishi anything)
- [ ] 3D hero with Three.js
- [ ] Dark/light theme toggle
- [ ] Live GitHub stats widget
- [ ] PWA support (offline mode)

---

<div align="center">

:star: **If you liked this, drop a star -- it means a lot!**

```
Designed & Developed by Rishi Sharma
BCA Student | Builder | Cybersecurity Enthusiast
```

</div>
