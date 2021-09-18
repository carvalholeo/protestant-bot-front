require("@babel/register")({
  "presets": [
    ["@babel/preset-react", {}],
    ["@babel/preset-env", {}]
  ]
});
const router = require("../../routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  const generator = new Sitemap(router());
  generator.build(process.env.PUBLIC_URL);
  generator.save("build/sitemap.xml");
}

module.exports = generateSitemap;
