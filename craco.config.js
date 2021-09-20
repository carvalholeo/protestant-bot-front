const sitemapGenerator = require('./src/services/sitemap-generator');

module.exports = {
  webpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('afterCompile', () => {
            sitemapGenerator()
          });
        }
      }
    ],
  }
};
