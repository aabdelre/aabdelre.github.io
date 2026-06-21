# aabdelre.github.io

My personal website — built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # build the production site into dist/
npm run preview  # preview the production build locally
```

## Editing content

| What | Where |
|------|-------|
| Hero, bio, social links | `src/pages/index.astro` (hero section) |
| Projects | `projects` array in `src/pages/index.astro` |
| Experience | `experience` array in `src/pages/index.astro` |
| Blog posts | add a Markdown file to `src/content/blog/` |
| Résumé PDF | drop a `resume.pdf` into `public/` |
| Global styles | `src/styles/global.css` |

### Adding a blog post

Create `src/content/blog/my-post.md`:

```markdown
---
title: "My Post Title"
description: "One-line summary."
pubDate: 2026-06-21
---

Write your post in Markdown here.
```

It appears automatically on `/blog` and in "Latest writing" on the home page.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and deploys it to GitHub Pages.

**One-time setup:** In the repo on GitHub, go to
**Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

The live site is at https://aabdelre.github.io
