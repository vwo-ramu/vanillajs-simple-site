# Deploying to GitHub Pages

This project is set up to deploy to GitHub Pages using the `gh-pages` branch.

## Steps

1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Deploy:**
   ```bash
   npm run deploy
   ```

The site will be available at `https://vwo-ramu.github.io/vanillajs-simple-site/`.

---

- The `base` in `vite.config.ts` is set to `/vanillajs-simple-site/` (update if your repo name is different).
- The deployment uses the `gh-pages` npm package.
