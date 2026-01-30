// makePhotosList.js
const fs = require("fs");
const path = require("path");

const imgDir = path.join(__dirname, "img");
const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".JPG", ".JPEG", ".PNG", ".WEBP", ".GIF"]);

const files = fs.readdirSync(imgDir)
  .filter(f => exts.has(path.extname(f)))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

console.log("const photos = [");
for (const f of files) console.log(`  "img/${f}",`);
console.log("];");
