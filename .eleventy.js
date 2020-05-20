const marked = require('marked');
const CleanCSS = require('clean-css');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addNunjucksFilter('markdown', (value) => marked(value));

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
