# 🧵 Rakhi for Nani ❤️

A personalized Raksha Bandhan web experience created for **Ratna Kishore (Nani)**.

## ✨ Features

- Interactive "Open Your Surprise" experience
- Personalized sister-to-brother letter
- Real family/Raksha Bandhan photos
- Responsive mobile-first layout
- Lightweight vanilla HTML/CSS/JavaScript
- Confetti celebration animation
- No database, no login, no tracking, and no API keys

## 🔐 Security

This project intentionally avoids a backend because it does not need one.

Security practices included:

- No credentials or API keys in source code
- `.env` and deployment secrets excluded through `.gitignore`
- No third-party JavaScript libraries required
- No form fields or user-controlled HTML
- Static deployment is preferred
- A restrictive referrer policy is included in `index.html`

### Important before making the repository public

The photos in `assets/` are personal. If the GitHub repository is public, anyone can access those images.

For a **public GitHub portfolio**, either:
1. Keep the repository private, or
2. Replace personal photos with photos you are comfortable making public.

The deployed website itself can also be shared privately depending on the hosting provider's settings.

## 🚀 Run locally

No installation is required.

Open `index.html` in a browser, or use VS Code Live Server.

## 🌐 Deploy

This is a static site and can be deployed to services such as Vercel, Netlify, or GitHub Pages.

### GitHub

```bash
git init
git add .
git commit -m "Create Raksha Bandhan website for Nani"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Do not commit `.env` files, passwords, tokens, private keys, or other secrets.

## 📁 Structure

```text
rakhi-for-nani/
├── assets/
│   ├── nani-and-sister.jpg
│   ├── rakhi-closeup.jpg
│   └── family-memory.jpg
├── index.html
├── style.css
├── script.js
├── .gitignore
├── README.md
└── LICENSE
```

Made with ❤️ for Nani.
