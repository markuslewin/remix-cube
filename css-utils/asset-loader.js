const path = require("path");
const fs = require("fs");
const xxh = require("xxhashjs");

const publicDir = "public";
const assetsDir = "styles-assets";
const targetPath = path.join(publicDir, assetsDir);

// Writes assets to `targetPath` and rebases `url`s relative to `publicDir`
const assetLoader = require("postcss-url")({
  url: (asset) => {
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }
    const { name, ext } = path.parse(asset.absolutePath);
    const content = fs.readFileSync(asset.absolutePath);
    const hash = xxh.h32(content, 0).toString(16);
    const outputBasename = `${name}.${hash}${ext}`;
    fs.writeFileSync(path.join(targetPath, outputBasename), content);
    return `/${assetsDir}/${outputBasename}`;
  },
});

module.exports = assetLoader;
