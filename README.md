# AI Role Roadmap Generator | Calibrate Your Pivot 🚀

A state-of-the-art, fully static HTML/CSS/JavaScript web application that generates personalized, high-fidelity 12-month AI career upskilling roadmaps calibrated dynamically to your exact experience level. 

Democratizing high-quality AI education completely free, ad-free, and open-source.

---

## 🌟 Premium Features

*   **7 Current Roles & 6 Target AI Roles**: Seamlessly maps cross-disciplinary pivots across highly demanded industry profiles:
    *   *Current background options*: Software Engineer, Data Analyst, Data Engineer, DevOps Engineer, QA Engineer, Product Manager, UX Designer.
    *   *Target AI paths*: AI Engineer, ML Engineer, MLOps Engineer, AI Safety Engineer, Research Scientist, AI Product Manager.
*   **Tactile Years-of-Experience Slider**: Tactile range slider (supporting `0` to `20+` years) with a dynamic bubble indicator.
*   **Real-Time Difficulty Gauge Widget**: Computes difficulty scores (`20%` to `95%`) and experience credits *live* inside the input panel, updating visual progress meters and HSL color alerts before generation.
*   **Curated 8-Reference Library Per Month**: Enriches every month with **5 additional premium free links** (totaling **96 curated educational resources per roadmap**), covering fast.ai, Hugging Face NLP, Cohere LLM U, OpenAI Prompting Guides, Microsoft AutoGen, and OWASP top 10 safety guides.
*   **Neon Glassmorphism Aesthetics**: Translucent modular card frames (`backdrop-filter: blur(20px)`), radial cosmic backdrops with glows, glowing chronological timeline lines, and interactive hover scales.
*   **Wall of Fame & Patreon Sponsor Integration**: Custom-styled meta block to feature Gold-tier sponsors and Pioneers, supporting open-source educational funding.
*   **One-Click Browser PDF Export**: Instantly exports roadmaps into dark-themed, cleanly paginated PDFs with all 8 monthly references preserved as clickable, active links.

---

## 📁 File Structure

The project runs completely client-side in the browser, requiring **zero backend servers, package installation, or build tools**:

-   `index.html` — Semantic, SEO-optimized layout with Outfit and Plus Jakarta Sans fonts.
-   `static/styles.css` — High-tech cosmic stylesheet built with responsive design variables.
-   `static/app.js` — Client-side logic for live difficulty computation, link injections, and browser PDF rendering.
-   `static/roadmaps-data.js` — Large repository of comprehensive 12-month upskilling paths and technical instructions.
-   `.nojekyll` — Bypasses Jekyll processing when deploying directly on GitHub Pages.

---

## 💻 Run Locally

No terminal installation or setups required:
1.  Double-click `index.html` to open the app directly inside any modern web browser.
2.  Alternatively, serve it with a lightweight web server (e.g. `npx serve .` or Live Server extension).

---

## ☁️ Deploy to GitHub Pages for Free

This zero-cost static page is 100% ready to serve worldwide:

1.  Create a new repository on GitHub.
2.  Commit and push all files in this project folder.
3.  Navigate to your repository's **Settings** tab.
4.  Go to the **Pages** section in the left sidebar.
5.  Under **Build and deployment**, set **Source** to `Deploy from a branch`.
6.  Select your branch (usually `master` or `main`) and the root folder `/`.
7.  Click **Save**.

Your generator will go live within seconds at:
```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```
