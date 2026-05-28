# Contributing to Rishi Sharma's Portfolio

Thanks for your interest! This is a personal portfolio, but I welcome:
- Bug reports
- Accessibility improvements
- Performance suggestions
- Creative feature ideas

---

## How to Contribute

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### 2. Create a Branch

```bash
# Use a descriptive branch name
git checkout -b fix/classified-card-glitch
git checkout -b feat/dark-mode-toggle
git checkout -b docs/update-readme
```

### 3. Run Locally

```bash
npx serve .
# Open http://localhost:3000
```

### 4. Make Your Changes

**Code style guidelines:**
- Keep components small and focused
- Use JSX inline styles consistent with existing patterns (no new CSS files)
- Framer Motion for all animations — no raw CSS transitions on React elements
- Test in Chrome, Firefox, and Edge before submitting

### 5. Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add voice command navigation
fix: classified card not revealing on mobile
docs: update README with new features
style: improve terminal scrollbar styling
perf: reduce particle count on mobile
ci: add lighthouse score check
```

### 6. Open a Pull Request

- Fill in the PR template completely
- Add screenshots if you changed the UI
- Link the related issue with `Closes #123`

---

## Architecture Overview

| File | Responsibility |
|---|---|
| `index.html` | App shell, CDN imports, auth loader HTML, DevTools script |
| `core.js` | All shared/reusable components and utilities |
| `sec1.js` | Navbar, Hero, Projects (CapSection), ClassifiedCard |
| `sec2.js` | Tech Stack, Terminal, Stats |
| `sec3.js` | Timeline, About, FAQ, Contact, App root |

**Key patterns:**
- Components export to `window.*` (no ES modules — Babel standalone limitation)
- `ScrollReveal` wraps anything that should animate in on scroll
- `ClassifiedReveal` wraps sections that start locked

---

## Reporting Bugs

Use the [Bug Report template](https://github.com/Rishisharma029/portfolio/issues/new?template=bug_report.yml).

## Security Issues

**Do NOT open public issues for security vulnerabilities.**  
Email: [i.rishisharma2007@gmail.com](mailto:i.rishisharma2007@gmail.com)

---

*This project is maintained by a BCA student learning in public. Be kind!*
