const { TextToSpeechPlugin } = require("eleventy-plugin-text-to-speech");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(TextToSpeechPlugin);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
