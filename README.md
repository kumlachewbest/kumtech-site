# KUMMECH — GitHub Pages Ready Website

Personal academic/research website for **Kumlachew Yeneneh**.

## Files

- `index.html` — complete website content
- `style.css` — responsive visual design
- `script.js` — navigation and quick editor
- `.nojekyll` — GitHub Pages compatibility
- `CNAME` — configured for `www.kummech.com`
- `404.html` — custom error page
- `robots.txt` — search-engine crawler instructions
- `sitemap.xml` — website sitemap
- `.github/workflows/pages.yml` — automatic GitHub Pages deployment
- `README.md` — deployment instructions

## Publish with GitHub Pages

### Option A — easiest

1. Create/sign in to GitHub.
2. Create a **new repository**.
3. A repository name such as `kummech.com` is recommended.
4. Set the repository to **Public** if using the simplest GitHub Pages setup.
5. Upload all files and folders from this package.
6. Commit the files to the `main` branch.
7. Open **Settings → Pages**.
8. Under **Build and deployment**, choose **GitHub Actions**.
9. The included workflow will deploy the site automatically.
10. Open the Pages URL shown by GitHub.

### Custom domain: www.kummech.com

The package already contains:

`CNAME`

with:

`www.kummech.com`

At your domain registrar/DNS provider, create:

**CNAME**
- Host/Name: `www`
- Target/Value: `<your-github-username>.github.io`

For the root domain (`kummech.com`), use the A records recommended by GitHub Pages for your account/host. GitHub's current Pages documentation should be followed if it displays different DNS targets.

Then in GitHub:

**Repository → Settings → Pages → Custom domain**

enter:

`www.kummech.com`

Enable **Enforce HTTPS** after DNS has propagated.

## Before publishing

Replace the profile placeholder with your professional photograph.

Recommended method:

1. Put the image in the repository as `profile.jpg`.
2. In `index.html`, replace the placeholder portrait with an image element.
3. Use a professional head-and-shoulders photograph.

### CV

Add your final CV PDF as:

`Kumlachew_Yeneneh_CV.pdf`

Then connect the Download CV button to that file.

### Google Scholar and LinkedIn

The website contains editable placeholders. Open the **EDIT WEBSITE** panel in the lower-right corner and enter the real URLs.

For permanent publication, edit the corresponding links in `index.html`.

## Editing publications

Inside `index.html`, duplicate an existing publication block in:

`<div class="pub-list">`

Then change:

- year
- paper title
- journal
- DOI URL

Do not add publications that have not actually been published/accepted.

## Local preview

You can simply open `index.html` in a browser.

For a closer GitHub Pages preview, use a local web server, for example:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## Branding

The site uses:

**KUMMECH.**  
Research • Engineering • Innovation

The design is responsive and works on desktop, tablet and mobile screens.

## Important

This package does not itself register `kummech.com` or create the GitHub account. The domain must be registered separately if it is available.
