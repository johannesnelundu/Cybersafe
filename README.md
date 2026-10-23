# TheRealTechInnovator CyberSafe — beginner project

This is a starter Progressive Web App (PWA) built with plain HTML, CSS, and JavaScript.

## Files
- `index.html` — page content and layout
- `styles.css` — visual design and responsive layout
- `app.js` — safety-tip buttons and quiz interaction
- `manifest.json` — app name, icon, and installation settings
- `sw.js` — basic offline caching
- `icons/` — app icons

## Preview on your computer
1. Extract this ZIP into a folder.
2. Open `index.html` in a browser to preview the basic page.
3. For PWA installation and service-worker testing, serve the folder over HTTPS or localhost. Opening the file directly is not enough for installability.
4. An easy beginner option is Visual Studio Code with the Live Server extension, or Python's built-in local server:
   `python -m http.server 8000`
   Then open `http://localhost:8000` in your browser.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository named `cybersafe`.
2. Upload the files and folders from this project. Ensure `index.html` is at the repository root.
3. In the repository, open **Settings → Pages**.
4. Under build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. GitHub will show the published address in Settings → Pages.
6. Test the HTTPS address on your phone and computer.

GitHub Pages sites are public. Do not upload passwords, private data, API keys, or anything secret.

## Install on Android
After publishing over HTTPS, open the site in Chrome or Samsung Internet. Use the browser menu and look for **Install app** or **Add to Home screen**. The wording and installation behavior can vary by browser.

## Before sharing widely
- Test every button on both phone and computer.
- Review the safety advice and add reliable sources.
- Add a privacy policy before collecting personal information.
- This starter is educational only; it does not scan links, files, or phones.
- Offline caching is basic and should be tested before depending on it.

## Suggested next features
1. More quizzes and progress tracking.
2. A report-a-scam learning page with official reporting resources.
3. A curated library of current cybersecurity alerts.
4. Optional backend only if a genuine need for accounts or shared data arises.
