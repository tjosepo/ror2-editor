import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// disabling eslint rules until we migrate to node 22 which can run ts code
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function log(...args) {
  console.info("png-webp-converter:", ...args);
}

const imageBaseDir = "public/images/png";

/** @type {string[]} */
const allImages = fs
  .readdirSync(imageBaseDir, { recursive: true })
  .filter((file) => file.endsWith("png"));

let convertedImages = 0;

allImages.forEach((imagePath) => {
  const webpImagePath = `${imageBaseDir}/${imagePath}`.replace(/png/g, "webp");

  // If image exists do nothing
  if (fs.existsSync(webpImagePath)) return;

  log(`"${imagePath}" not found in webp folder... converting...`);

  const imageDir = path.dirname(webpImagePath);

  fs.mkdirSync(imageDir, { recursive: true });

  sharp(`${imageBaseDir}/${imagePath}`).webp().toFile(webpImagePath);

  convertedImages += 1;

  log(`"${webpImagePath}" has been created`);
});

if (convertedImages === 0) {
  log("Nothing to process: all png images have they webp counterpart");
}
