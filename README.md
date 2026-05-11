# AI Role Roadmap Generator

A fully static HTML/CSS/JavaScript app that generates 12-month AI career roadmaps from a current role, target AI role, and years of experience.

## GitHub Pages Ready

This project is a zero-cost static site. It does not need package installation or a build step.

GitHub Pages can serve it directly from the repository root because all app paths are relative:

- `index.html`
- `static/styles.css`
- `static/app.js`
- `static/roadmaps-data.js`
- `.nojekyll`

The PDF export runs in the visitor's browser with `jsPDF` loaded from a CDN.

## Deploy To GitHub Pages For Free

1. Create a new GitHub repository.
2. Upload or commit all files in this folder.
3. In GitHub, open `Settings`.
4. Go to `Pages`.
5. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
6. Select branch `main` and folder `/root`.
7. Click `Save`.

Your app will be available at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## Run Locally

Open `index.html` directly in your browser.

No terminal command is required.

## Features

- Exact roadmap matching with closest-default fallback logic
- Difficulty score based on years of experience
- 12-month upskilling instructions
- Three live reference links per month
- Browser-side PDF generation with formatted sections and clickable links
