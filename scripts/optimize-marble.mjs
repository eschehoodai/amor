// One-off: convert the huge marble source JPGs (~35 MB each) into web-ready
// WebP backgrounds (~1920px wide). Originals stay untouched in public/.
import sharp from 'sharp';
import { readdirSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'design-sources/marble-originals';
const OUT = 'public/textures';
mkdirSync(OUT, { recursive: true });

const files = readdirSync(SRC).filter((f) => /\.jpe?g$/i.test(f)).sort();

for (const file of files) {
  const m = file.match(/(\d{2})\.jpg$/i);
  const idx = m ? m[1] : String(files.indexOf(file) + 1).padStart(2, '0');
  const dest = join(OUT, `marble-${idx}.webp`);
  await sharp(join(SRC, file))
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 70 })
    .toFile(dest);
  const kb = (statSync(dest).size / 1024).toFixed(0);
  console.log(`${file} -> ${dest} (${kb} KB)`);
}
console.log('Done.');
