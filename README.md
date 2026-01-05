# Unity Package Manager Landing Page

This repository hosts the landing page for Unity packages at `upm.apie.dev`.

## Setup

This site is hosted on GitHub Pages and automatically deploys from the `main` branch.

### Local Development

1. Clone this repo
2. Open `index.html` in your browser
3. Make changes and commit

### Deployment

Automatically deployed to GitHub Pages on push to `main`.

## Adding New Packages

Edit `index.html` and add a new package card following the existing template.

## DNS Configuration

Point `upm.apie.dev` to GitHub Pages:

**CNAME Record:**
```
upm.apie.dev → notreallycheeks.github.io
```

**Or A Records (if CNAME not available):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## License

MIT

