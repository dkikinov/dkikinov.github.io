# Portfolio — dkikinov.github.io

Personal portfolio site built with React + Vite, deployed to GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Editing Content

All site content lives in **one file**: `src/data/projects.js`

- Update `siteInfo` for your name, bio, links
- Update `skills` to add/remove tech skills
- Update `projects` to add/remove/edit project entries

## Deploying to GitHub Pages

### Option A: Automatic (recommended)

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) auto-deploys on every push to `main`.

**One-time setup:**
1. Go to your repo → Settings → Pages
2. Under "Build and deployment", set Source to **GitHub Actions**
3. Push to `main` — the site will deploy automatically

### Option B: Manual

```bash
npm run build
```

This outputs to `dist/`. You can manually push the contents of `dist/` to your repo.

## Adding a New Project

In `src/data/projects.js`, add an entry to the `projects` array:

```js
{
  id: "my-project",           // URL slug
  title: "My Project",
  subtitle: "Short descriptor",
  summary: "One paragraph for the card on the home page.",
  description: [
    "Paragraph 1 for the detail page.",
    "Paragraph 2...",
  ],
  tech: ["Java", "Spring Boot"],
  images: [
    { src: "/images/my-image.jpg", alt: "Description" }
  ],
  github: "https://github.com/...",  // optional
}
```

Put images in `public/images/` or use external URLs.
