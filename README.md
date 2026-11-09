# Marshall Tech — React website

Marketing site for **Marshall Tech** (home automation, Coimbatore & Coonoor), built with
React 19, React Router and Vite. React port of the original Spring Boot site in `../marshall-tech`.

## Run locally

Needs Node.js 18 or newer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the built dist/ locally
```

## Project structure

```
public/            static files copied as-is (images, favicon, robots.txt, sitemap.xml, _redirects)
src/
  main.jsx         routes
  Layout.jsx       header, footer, visit band, shared pieces
  data.js          all site content (company, services, solutions, gallery...)
  site.css         styles
  pages/           Home, About, Projects, Gallery, Contact, NotFound
```

To change text, phone numbers, addresses or gallery items, edit `src/data.js`.
To add a gallery photo, put the image in `public/images/` and add an entry to `gallery` in `src/data.js`.

## Contact form

There is no backend. The form checks the fields, then opens the visitor's email app with the
enquiry addressed to `marshalltech13@gmail.com`. To store enquiries instead, change `submit()`
in `src/pages/Contact.jsx` to POST to an API.

## Hosting on Netlify

`public/_redirects` (`/*  /index.html  200`) is already included so pages like `/about` work
when opened directly or refreshed. Do not delete it.

### Option A — from GitHub (auto-deploys on every push)

1. Push this folder to a GitHub repository.
2. Sign in at https://app.netlify.com → **Add new site** → **Import an existing project** → **GitHub**.
3. Pick the repository and set:
   - **Base directory:** leave empty (or `marshall-tech-react` if this folder is inside a larger repo)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist` (or `marshall-tech-react/dist` with the base directory above, Netlify fills this in)
4. Click **Deploy**. The site goes live at `https://<random-name>.netlify.app`.

### Option B — drag and drop (no Git)

1. Run `npm run build`.
2. Open https://app.netlify.com/drop and drag the `dist` folder onto the page.

Repeat both steps for every update.

### Option C — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

### Custom domain (marshallin.in)

1. In Netlify: **Site configuration → Domain management → Add a domain** → enter `marshallin.in`.
2. At your domain registrar, either switch the nameservers to the ones Netlify shows, or add the DNS records it lists
   (an `A` record for `marshallin.in` and a `CNAME` for `www` pointing to `<your-site>.netlify.app`).
3. Netlify issues the free HTTPS certificate automatically once DNS resolves (can take up to 24 hours).
