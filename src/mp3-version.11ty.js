const { AudioVersionTemplate } = require("eleventy-plugin-text-to-speech");

class StringAudioTemplate extends AudioVersionTemplate {
  mp3PagesArray = "strings";
  getContentFromData = (string) => string.text;
  getMp3UrlFromData = (string) => string.mp3Url;

  convertContentToPlainText = async (content) => content;
}

module.exports = StringAudioTemplate;
