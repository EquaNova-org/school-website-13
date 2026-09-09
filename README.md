# School No. 13 — Website

Built with React + Vite. Includes the DepthCarousel, DriftWall, and BlurText
animation components exactly as provided, wired into a Trinity-School-inspired
navy/white/brass editorial design, with your real photos and bilingual
(English / O'zbek) content baked in via a lightweight data-driven language
switcher (no page reload, no translation API — just swapping content objects).

## Run it locally

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

- `src/data/content.js` — all EN/UZ copy in one place. Edit this to change any text.
- `src/data/galleryPhotos.js` — the photo set that feeds the DriftWall gallery.
- `src/assets/photos/` — your source photos (compressed to web-friendly JPEGs).
- `src/context/LanguageContext.jsx` — the EN/UZ switcher state, read by every section.
- `src/components/` — DepthCarousel, DriftWall, BlurText (as provided), LanguageSwitcher, InfoCard.
- `src/sections/` — one file per page section (Header, Hero, About, Achievements,
  PathForward, Values, Gallery, ContactFooter).

## Notes

- Language switching is instant and data-driven (`src/data/content.js`), not a
  translation service — exactly as requested.
- Photos were resized/compressed (JPEG, max width 1600px) for performance;
  originals are not kept in the project. Swap files in `src/assets/photos/`
  and update `src/data/galleryPhotos.js` / `src/sections/*.jsx` imports if you
  add or replace images.
- To deploy: run `npm run build`, then host the `dist/` folder on any static
  host (Netlify, Vercel, GitHub Pages, or your own server).
