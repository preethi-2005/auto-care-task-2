import { defineConfig } from 'vite';
import nunjucks from 'nunjucks';
import fs from 'fs';
import path from 'path';

function nunjucksPlugin() {
  return {
    name: 'nunjucks-plugin',

    closeBundle() {   // 🔥 IMPORTANT CHANGE (not buildStart)
      const pagesDir = path.resolve(__dirname, 'src/templates/pages');
      const distDir = path.resolve(__dirname, 'dist');

      const env = nunjucks.configure('src/templates', {
        autoescape: true,
      });

      const files = fs.readdirSync(pagesDir);

      files.forEach(file => {
  const html = env.render(`pages/${file}`);
  const outputFile = path.join(distDir, file.replace('.njk', '.html'));
  fs.writeFileSync(outputFile, html);
});

// 🔥 ADD THIS BLOCK (THIS IS WHAT YOU MISSED)
const srcAssets = path.resolve(__dirname, 'src/assets');
const distAssets = path.resolve(__dirname, 'dist/assets');

fs.cpSync(srcAssets, distAssets, { recursive: true });

console.log("✅ Nunjucks pages + assets generated");
    }
  };
}

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  plugins: [nunjucksPlugin()]
});