module.exports = {
  plugins: [
    require("postcss-import-ext-glob"),
    require("postcss-import"),
    require("./css-utils/asset-loader"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};
