# Jansdale S. Yusi — Portfolio & The Evolution of My Prompts

Local copy of the portfolio originally built on Emergent. The React source, styling and content are the
original files recovered from the Emergent preview; only the build tool changed (Vite instead of
Create React App) and Emergent's tracking/overlay scripts were left out.

## Run it locally

Requirements: [Node.js](https://nodejs.org) 18 or newer (LTS recommended).

```bash
npm install     # first time only
npm start       # opens http://localhost:3000
```

Stop the server with `Ctrl + C`.

To build the static site for deployment later:

```bash
npm run build   # output goes to dist/
npm run preview # serves dist/ at http://localhost:4173 to check the build
```

## Structure

```
index.html                 page shell, Google Fonts (Syne, Instrument Serif, JetBrains Mono, Archivo)
vite.config.js             "@" alias -> src/, JSX allowed in .js files, dev server on port 3000
src/
  index.js, App.js         entry, routes: /  /journey  /journey/:slug
  index.css                compiled stylesheet (Tailwind output, already built; no Tailwind setup needed)
  pages/                   Home.js, Journey.js, Story.js
  components/              Nav, Footer, Lightbox, BeforeAfter, MilestoneCard, StoryNav, ...
  data/portfolio.js        Home page content (profile, skills, projects, achievements)
  data/milestones/m01-m08  one file per PDC60 milestone (prompts, evidence, reflections)
  lib/lenis.js             smooth scrolling
public/
  evidence/                screenshots and document pages per milestone
  profile/                 profile photo and the downloadable resume
  projects/                project screenshots
```

## Editing content

- Text on the Home page: `src/data/portfolio.js`
- A milestone story: `src/data/milestones/mNN.js`
- Replace an image or the resume: put the new file in `public/` under the same name

## Note on styling

`src/index.css` is the stylesheet exactly as Emergent's build produced it. It already contains every class the
components use. If you add **new** Tailwind classes that are not used anywhere yet, they will have no effect until
Tailwind is set up again; existing classes all work.

## Deploying

The site uses client-side routes (`/journey`, `/journey/<story>`), so the host must send every
path to `index.html`:

- **Vercel:** `vercel.json` already contains the rewrite.
- **Netlify:** `public/_redirects` already contains the rule.
- **GitHub Pages:** copy `dist/index.html` to `dist/404.html` after `npm run build`.

After the site has its real address, open `index.html` and change `og:image` and `og:url`
to full `https://…` URLs so LinkedIn and Facebook show the preview image (`public/og-image.jpg`).

When sharing or uploading the project, leave out `node_modules` (it is recreated by `npm install`).
