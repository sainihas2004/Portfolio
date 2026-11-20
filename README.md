# Perakam Sai Nihas — Developer Portfolio

A modern, high-performance, dark-themed developer portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for placement drives, recruiters, and technical interviewers.

---

## 🌟 Highlights & Features

- **Recruiter-Ready Hero & Headline**: Prominently highlights *"Aspiring Software Developer | Java | Python | AI/ML Enthusiast"* with immediate calls to action, placement status pill, and live interactive Java candidate record.
- **100% Genuine & Verified Projects**:
  1. **AI-Based Government Scheme Recommendation System**: Dual-engine architecture featuring deterministic **Rule-Based Engine** (structured JSON matching) + **RAG Model** context retrieval & **XGBoost** ranking model. Built with React 19, TypeScript, Vite, Tailwind CSS, Supabase, and voice input.
  2. **YOLOv5 Real-Time Object Detection System**: Computer vision application utilizing PyTorch, YOLOv5s, and OpenCV with Streamlit for image, video, and live webcam detection.
  3. **Lightweight TypeScript ORM & Full-Stack System**: Custom ORM package published on npm (`@sai_nihas/lightweight-orm`) tested via a full-stack PostgreSQL Todo app deployed on Vercel.
- **Experience-Verified Skills Matrix**: Strict authenticity policy organized into Languages (Java, Python, TypeScript, SQL), Database (MySQL, PostgreSQL), Core CS (OOP, DSA, DBMS, OS, Networks), and AI/ML.
- **Academic Qualifications Timeline**: VIT-AP University (Integrated M.Tech Software Engineering, 7.96 CGPA), Sri Chaitanya Junior College (77.7%), and Zilla Praja Parishad School (99%).
- **Interactive Resume Modal**: Recruiters can preview the full resume directly in the browser, print or save as PDF, and copy plaintext for ATS systems.
- **Contact & Connect**: Direct contact cards with 1-click clipboard copy (email & phone), working GitHub & LinkedIn links, and a validated message form with celebratory confetti.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite |
| **Styling** | Tailwind CSS v3 (Dark theme palette, custom gradients, glassmorphism) |
| **Icons** | Lucide React + Custom SVG Brand Icons |
| **Effects** | Canvas Confetti |
| **Fonts** | Plus Jakarta Sans & JetBrains Mono |
| **Tooling** | PostCSS, Autoprefixer, ESModules |

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18 or higher) is installed on your system.

### 2. Installation
Open PowerShell or your terminal in this directory:
```bash
cd C:\Users\ASUS\.gemini\antigravity\scratch\sai-nihas-portfolio
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 4. Build for Production
```bash
npm run build
```
The optimized, minified bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Free Deployment Instructions

### Option 1: Vercel (Recommended — Fastest & Zero-Config)
1. Push this repository to your GitHub account (`https://github.com/sainihas2004/portfolio`).
2. Visit [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and import your portfolio repository.
4. Keep the default build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio will be live on `https://your-portfolio.vercel.app` in under 60 seconds with free SSL and global CDN.

---

### Option 2: Netlify (Drag-and-Drop or Git)
#### Method A: Git Integration
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **"Add new site"** &rarr; **"Import an existing project"** &rarr; choose GitHub.
3. Set Build Command: `npm run build` and Publish Directory: `dist`.
4. Click **"Deploy site"**.

#### Method B: Direct Drag-and-Drop
1. Run `npm run build` locally.
2. Go to Netlify Drop (`https://app.netlify.com/drop`).
3. Drag and drop the generated `dist` folder into the browser window. It will deploy immediately.

---

### Option 3: GitHub Pages
1. In `vite.config.js`, set the base path to your repo name:
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // or '/' if using a custom domain or sainihas2004.github.io
     plugins: [react()],
   })
   ```
2. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## 📁 Project Structure

```
sai-nihas-portfolio/
├── index.html                   # Entry HTML with meta tags, SEO, and Google Fonts
├── vite.config.js               # Vite configuration (port 3000)
├── tailwind.config.js           # Theme colors, fonts, custom animations
├── package.json                 # Dependencies and build scripts
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Tailwind directives & glassmorphic styles
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all verified data
│   └── components/
│       ├── Navbar.jsx           # Sticky blur header with scrollspy & mobile menu
│       ├── Hero.jsx             # Hero section with headline, CTAs & code card
│       ├── About.jsx            # Bio, engineering pillars & soft skills
│       ├── Skills.jsx           # Categorized verified technical skills matrix
│       ├── Projects.jsx         # Featured Flagship card & secondary project cards
│       ├── Education.jsx        # Timeline for VIT-AP, Intermediate, and SSC
│       ├── Achievements.jsx     # Honors & customizable certification slots
│       ├── Contact.jsx          # Contact cards with 1-click copy & message form
│       ├── ResumeModal.jsx      # In-browser resume viewer with Print/PDF export
│       ├── Icons.jsx            # Crisp SVG icons for GitHub & LinkedIn
│       └── Footer.jsx           # Clean footer with quick links & back-to-top
```

---

## ✏️ How to Customize & Update Information

All personal details, project descriptions, skills, and certifications are centralized in a single clean data file:
📂 `src/data/portfolioData.js`

- To update LinkedIn, Email, or Phone: edit `personalData`
- To add new Certifications or Hackathon achievements: edit `achievementsData`
- To add a new Project: append to `projectsData`
