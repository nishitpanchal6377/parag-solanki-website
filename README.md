# Parag Solanki — Personal Website

Premium static portfolio website for Parag Solanki, Acceleration Manager at i-Hub Gujarat.

## Stack
Plain HTML, CSS and JavaScript. No framework, package manager or build step is required.

## Repository structure
- `index.html` — semantic page content and SEO metadata
- `css/style.css` — responsive design system, layouts and motion
- `js/script.js` — navigation, reveals, counters and interactions
- `assets/portrait.jpeg` — portrait used in the hero

## Local preview
From the repository root:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy
The site can be deployed directly to GitHub Pages, Vercel, Netlify or any static host.

## V2 refinements
The hero portrait is deliberately constrained and responsively repositioned for desktop, tablet and mobile, with a quieter executive visual treatment and improved content hierarchy.

## V3 refinements
- Compact circular hero portrait on desktop, tablet and mobile.
- Portrait uses `object-fit: contain` to keep the full image visible instead of cropping the left and right edges.
- M2M Program, Startup Srujan and IPR Facilitation are now text-only editorial cards with no placeholder imagery or implied logos.
