const sitemapGenerator = require('./src/services/sitemap-generator');

module.exports = {
  webpack: {
    test: /\.(scss)$/,
    use: [{
      // inject CSS to page
      loader: 'style-loader'
    }, {
      // translates CSS into CommonJS modules
      loader: 'css-loader'
    }, {
      // Run postcss actions
      loader: 'postcss-loader',
      options: {
        // `postcssOptions` is needed for postcss 8.x;
        // if you use postcss 7.x skip the key
        postcssOptions: {
          // postcss plugins, can be exported to postcss.config.js
          plugins: function () {
            return [
              require('autoprefixer')
            ];
          }
        }
      }
    }, {
      // compiles Sass to CSS
      loader: 'sass-loader'
    }],
    externals: ["react-helmet"],
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
