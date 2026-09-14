# Ritik Thakur portfolio

A responsive React + Vite portfolio for QA and backend developer opportunities, with a dark theme, animated project illustrations, and reduced-motion support.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite. On macOS or Linux, use `npm` instead of `npm.cmd`.

## Build

```powershell
npm.cmd run build
npm.cmd run preview
```

Deploy the generated `dist/` directory to a static hosting service. Optionally run `python server.py` after building to serve the site locally on port 8000.

## CI/CD

GitHub Actions installs dependencies and builds the site for every pull request and push to `main`. Successful pushes to `main` are deployed automatically to GitHub Pages.

In the repository's **Settings > Pages**, set **Source** to **GitHub Actions**. You can also run the workflow manually from the **Actions** tab.

## Update content

- `src/data.js`: profile, experience, projects, education, and course status.
- `src/main.jsx`: portfolio layout and animations.
- `src/styles.css`: responsive dark theme.
- `public/NEB_Resume_Ritik.pdf`: downloadable resume.

The site presents Ritik as a QA Engineer & Backend Developer, open to both roles. Data Science with Python is marked completed on the site. The supplied PDF remains unchanged.

Contact links open email, WhatsApp, LinkedIn, GitHub, and phone. The portfolio runs as a static site.
