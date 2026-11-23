# ATA Scanner Pro website

Static marketing/support site for **ATA Scanner Pro**.

## Files

```text
site/
├── index.html   Main page
├── styles.css   Styling
├── script.js    Menu, copy button, download-link handling
├── config.js    Download URLs (edit only if a link changes)
├── icon.ico     App icon used as favicon and header logo
└── README.md    This file
```

## Download links — already configured

The live MediaFire URLs are already set in `config.js` and also written directly into `index.html` as a fallback:

```text
64-bit: https://www.mediafire.com/file/7qnrmoababfssj8/ATAScannerPro.rar/file
32-bit: https://www.mediafire.com/file/wd9tr981f5l31y2/ATAScannerPro_x86.rar/file
```

If a download URL ever changes, update it in **both** places:

1. `config.js` — `download.x64` / `download.x86`
2. `index.html` — the matching `href="..."` values on the `data-download` links

The `data-download` attributes let `script.js` keep the buttons consistent.

## Included content

- Product overview and feature cards
- Short documentation / quick-start guide
- Price: **$150** one-time license
- Support: **IT Nation Company**
- Phone: **+20 102 008 8298** (`201020088298`)
- Order/payment and support chat via **WhatsApp** (`wa.me/201020088298`)
- Developer: **Eng. Mohamed Hamd**
- Download buttons (MediaFire links configured)

## Host on the internet

This is a plain static site. Upload the **contents of the `site` folder** to any static host.

### Option A — Netlify (easiest)

1. Go to <https://app.netlify.com/drop>
2. Drag the `site` folder onto the page
3. Netlify gives you a live URL immediately
4. Later, edit `config.js`, drag the folder again, or connect Git for automatic updates

### Option B — GitHub Pages

1. Create a GitHub repository
2. Upload all files from the `site` folder to the repository root
3. Go to **Settings → Pages**
4. Source: **Deploy from a branch** → `main` → `/root`
5. Save. Your site will be live at `https://USERNAME.github.io/REPO-NAME/`

### Option C — Vercel

1. Go to <https://vercel.com/new>
2. Import a repository containing the `site` files, or drag the folder
3. Framework preset: **Other / Static**
4. Deploy

### Option D — Your own hosting / cPanel

Upload the files into `public_html` (or the web root). The homepage is `index.html`.

## Notes

- No build step is required.
- No external libraries, fonts or CDNs are used.
- Do **not** upload `keygen.py`, `keygen_private.key` or the `keygen.dist` folder with the website.
- Only publish the installer EXE on the download page; keep signing keys private.
