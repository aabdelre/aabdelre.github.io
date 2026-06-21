// @ts-check
import { defineConfig } from 'astro/config';

// For a <username>.github.io repo the site is served at the root,
// so `site` is the full URL and no `base` is needed.
export default defineConfig({
  site: 'https://aabdelre.github.io',
});
