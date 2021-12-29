module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode('test1', function (arg1, arg2, arg3) {
    console.log(`${this.page.outputPath}:`, arg1, arg2, arg3);
    return `${arg1} - ${arg2} - ${arg3}`;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
