module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/CSS/");

  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
};
