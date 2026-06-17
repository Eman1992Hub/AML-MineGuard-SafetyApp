# ⛏️ MineGuard – Mining Safety PWA

A Progressive Web App (PWA) for mining workers that works **fully offline**.
Includes a mining glossary, PPE reference guide, JSA tool, and emergency procedures.

---

## 📁 Project File Structure

```
minesafety-app/
│
├── index.html       ← Main app layout and all tabs
├── style.css        ← All visual styling
├── app.js           ← App logic (glossary, JSA, emergency)
├── data.js          ← All content (terms, PPE, first aid)
├── sw.js            ← Service Worker (offline caching)
├── manifest.json    ← PWA manifest (install on phone)
├── icons/
│   ├── icon-192.png ← App icon (192x192px)
│   └── icon-512.png ← App icon (512x512px)
└── README.md        ← This file
```

---

## 🚀 STEP-BY-STEP: Host on GitHub Pages

### STEP 1 — Create a GitHub Account
1. Go to https://github.com
2. Click **Sign Up** and create a free account
3. Verify your email address

---

### STEP 2 — Create a New Repository
1. Click the **+** icon (top right) → **New repository**
2. Repository name: `mineguard-app` (or any name you prefer)
3. Set to **Public** (required for free GitHub Pages)
4. Tick **Add a README file**
5. Click **Create repository**

---

### STEP 3 — Upload Your App Files
1. Inside your new repository, click **Add file** → **Upload files**
2. Upload ALL files from this folder:
   - `index.html`
   - `style.css`
   - `app.js`
   - `data.js`
   - `sw.js`
   - `manifest.json`
3. For the `icons/` folder:
   - Click **Add file** → **Upload files**
   - Create a folder path by typing `icons/icon-192.png` in the name field
   - Upload both icon files
4. Scroll down, write a commit message like `"Initial upload – MineGuard v1.0"`
5. Click **Commit changes**

---

### STEP 4 — Enable GitHub Pages
1. In your repository, click the **Settings** tab (top menu)
2. In the left sidebar, click **Pages**
3. Under **Source**, click the dropdown and select **main** branch
4. Leave folder as `/ (root)`
5. Click **Save**
6. Wait 1–3 minutes for deployment

---

### STEP 5 — Access Your Live App
After deployment, GitHub will show your URL:
```
https://YOUR-USERNAME.github.io/mineguard-app/
```

Share this link with workers. They can:
- Open it in Chrome on Android
- Tap **"Add to Home Screen"** to install it like a native app
- Use it **fully offline** after the first visit

---

## 📱 How Workers Install on Android

1. Open the app link in **Google Chrome**
2. Tap the **three dots menu** (⋮) in Chrome
3. Tap **"Add to Home Screen"**
4. Tap **Add**
5. The app icon appears on the home screen — works offline!

---

## 🔧 How to Update Content

To add more glossary terms, open `data.js` and add to the `GLOSSARY_TERMS` array:

```javascript
{ 
  term: "Your Term", 
  short: "Brief description", 
  definition: "Full detailed definition here.", 
  category: "Category Name" 
},
```

To add PPE items, add to the `PPE_ITEMS` array.
To add safety tips, add to the `SAFETY_TIPS` array.

After editing, re-upload the file to GitHub and the live site updates automatically.

---

## 📦 App Features

| Feature | Description |
|---|---|
| 📖 Glossary | 45+ searchable mining terms with A–Z filter |
| 🦺 PPE Guide | 12 PPE items with descriptions and requirements |
| 📋 JSA Tool | Job Safety Analysis form saved locally on device |
| 🚨 Emergency | Emergency steps, contacts, and first aid guides |
| 📴 Offline | Works without internet after first visit |
| 📱 Installable | Can be installed on Android home screen |

---

## 🆓 Cost

- GitHub account: **Free**
- GitHub Pages hosting: **Free**
- Domain (optional): ~$10/year if you want a custom URL

---

## ✏️ Customization Tips

- **Company name**: Replace "MineGuard" in `index.html` header with your company name
- **Emergency numbers**: Update `EMERGENCY_CONTACTS` in `data.js` with real site numbers
- **Logo/icon**: Replace files in `icons/` folder with your company logo (PNG format)
- **Colors**: Edit CSS variables at the top of `style.css` to match company branding

---

*Built for mining workers. Designed to work anywhere — even underground.*
