// Writes a content hash of the built docs CSS to _data/asset_hash.json.
// It is used as the cache-busting query string in _includes/global/head.html.
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const CSS_FILE = path.join(__dirname, "../assets/css/website.min.css");
const OUTPUT_FILE = path.join(__dirname, "../_data/asset_hash.json");

const hash = crypto
  .createHash("md5")
  .update(fs.readFileSync(CSS_FILE))
  .digest("hex")
  .slice(0, 10);

fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ css: hash }, null, 2) + "\n");

console.log(`CSS asset hash: ${hash}`);
