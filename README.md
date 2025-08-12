## Portfolio

A personal portfolio built with Next.js 15, React 19, and Tailwind CSS v4. Static-exported for hosting on GitHub Pages.

### Tech stack
- **Framework**: Next.js 15 (App Router)
- **UI**: Tailwind CSS v4, Radix UI primitives, `lucide-react`, shadcn-style components under `components/ui`
- **Forms/Validation**: `react-hook-form`, `zod`
- **Other**: `next-themes`, `date-fns`

### Requirements
- **Node.js**: 20.x (matches CI)
- **Package manager**: npm (CI uses `npm ci`)

### Getting started
1. Install dependencies:
   ```bash
   npm ci
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000/portfolio` in your browser (the site uses a `basePath`).

You can start editing the homepage at `app/page.tsx`. Styles live in `app/globals.css` and `styles/globals.css`. UI components are in `components/ui`.

### Scripts
- **dev**: `npm run dev` — start the development server
- **build**: `npm run build` — static export to `out/`
- **start**: `npm run start` — run the production server (not required for Pages)
- **lint**: `npm run lint`

### Project structure (high level)
```
app/                 # App Router pages/layouts
components/          # Reusable components
  ui/                # shadcn-style components built on Radix
public/              # Static assets
.github/workflows/   # CI/CD (GitHub Pages)
styles/              # Additional global styles
next.config.mjs      # Static export + basePath configuration
```

### Deployment (GitHub Pages)
This repository is configured to deploy to GitHub Pages using static export.

- Static export is enabled in `next.config.mjs`:
  ```js
  // next.config.mjs
  const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: '/portfolio', // change to your repo name or '' for root
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
  }
  export default nextConfig
  ```
- The workflow `.github/workflows/deploy.yml` builds and publishes `./out` to Pages on pushes to `main`.

Steps to enable Pages:
1. In your repository Settings → Pages, set Source to “GitHub Actions”.
2. Ensure your default branch is `main` (or update the workflow trigger).
3. If your repository name changes, update `basePath` in `next.config.mjs` to match the repo name. For a custom domain or a root-level site, set `basePath` to `''`.

Notes:
- `images.unoptimized` is required for static export + GitHub Pages.
- Build output is written to `out/` by `npm run build`.

### Acknowledgements
- [Next.js](https://nextjs.org)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

### License
MIT
