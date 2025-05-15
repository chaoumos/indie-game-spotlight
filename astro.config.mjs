import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://indie-game-spotlight.example.com',
  integrations: [tailwind()],
  output: 'static',
});