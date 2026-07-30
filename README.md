# Parag Solanki — Personal Website (v2)

A static site (plain HTML/CSS/JS — no build step, no dependencies).

## Structure
- `index.html` — all page content
- `css/style.css` — design tokens, layout, animations
- `js/script.js` — seal graphic generation, scroll reveals, animated ledger counters, mobile drawer nav, magnetic button
- `assets/portrait.jpeg` — headshot used in the hero section

## Local preview
Open `index.html` directly, or run:
```
python3 -m http.server 8080
```
then visit http://localhost:8080

## Deploy
See the GitHub + Vercel step-by-step guide provided separately to publish
this at your chosen `.vercel.app` address.

## What changed in v2
- Replaced the generic dark-tech look with a distinctive "official registry /
  ledger" concept — fits naturally since Parag's actual work centers on IPR,
  patents, and a government-backed institution.
- New signature element: a hand-built radial seal (SVG, 36 tick marks + a
  circular text ring) that "stamps" in on load, in place of the earlier
  generic node/line network.
- Stats section rebuilt as a ledger-style index (number — dotted leader —
  label) instead of generic stat cards.
- "Four ways Parag moves an idea toward scale" replaced with "Where ideas are
  engineered into enterprises" and all section copy rewritten in a more
  precise, executive tone.
- Full mobile slide-in drawer navigation with staggered link animation,
  replacing the old simple dropdown.
- Added scroll-progress bar, subtle blueprint grid + film-grain texture,
  auto-scrolling skills marquee, and corner-bracket framing on the portrait
  and cards for a more "designed" feel.
