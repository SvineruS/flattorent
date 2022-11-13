const fs = require('fs');
const path = require("path");

const IMAGES_DIR = path.resolve(__dirname, "../../public/images/");
const FLATS_IMGS_FILE = path.resolve(__dirname, "./FLATS_IMGS.json");

const results = {};

const imagesDirs = fs.readdirSync(IMAGES_DIR)
  .filter(dir => !dir.includes(".") && dir !== "icons");
for (const imageDir of imagesDirs) {
    const images = fs.readdirSync(path.resolve(IMAGES_DIR, imageDir))
      .filter((img) => img !== "thumb.jpg");
    results[imageDir] = images;
}

console.log(results)

fs.writeFileSync(FLATS_IMGS_FILE, JSON.stringify(results, null, 2));
