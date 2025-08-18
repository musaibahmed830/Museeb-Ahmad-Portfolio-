# Unity Game Developer Portfolio (GitHub Pages)

A fast, modern portfolio template tailored for Unity devs. No frameworks or build steps — just HTML/CSS/JS.

## ✨ Features
- Clean, responsive design with light/dark support
- Games grid with filtering chips
- Video trailer modal (YouTube)
- Contact cards + copy‑email
- SEO and social meta tags
- Accessible (skip link, focus rings)
- Easy to edit

## 🚀 Quick Start
1. **Edit content** in `index.html`:
   - Replace name, email, links, and text.
   - Duplicate a `<article class="card">…</article>` block to add more games.
   - For each game, update buttons: Google Play/App Store/WebGL/Download/Devlog, and trailer link.
2. (Optional) Replace placeholder SVGs in `assets/` with your cover images (16:9).
3. (Optional) Drop your resume as `assets/Museeb_Ahmad_Resume.pdf`.
4. Open `index.html` in a browser to preview.

## 🟢 Deploy on GitHub Pages
**Option A: User site**
- Create a repo named **`<your-username>.github.io`**
- Upload all files at the root of the repo (keep folder structure).
- Commit and push. Your site will be at `https://<your-username>.github.io`.

**Option B: Project site (any repo name)**
- Create a repo (e.g., `game-portfolio`).
- Put these files at the repo root.
- In GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**. Save.
- Your site will be at `https://<your-username>.github.io/<repo-name>`.

> For custom domain: add your domain in **Settings → Pages**, then create a `CNAME` at your DNS pointing to `<your-username>.github.io`.

## 🔧 Tips
- **WebGL builds**: upload to itch.io or GitHub Pages (in `/webgl/<game>` folder) and link the **Play WebGL** button.
- **Badges** (downloads, awards): add to each card as tags.
- **Images**: export 1280×720 JPG/PNG for covers; compress to keep site fast.
- **Analytics**: add your GA snippet before `</head>` if you want metrics.
- **Open Graph image**: replace `assets/og-image.png` (1200×630).

## 🧑‍💻 Local edits
You can use Live Server or any static server, but double‑clicking `index.html` also works.

---

MIT License — free to use & modify.
