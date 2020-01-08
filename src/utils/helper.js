export default {
  getShortenedPostContent(content) {
    const maxCharCount = 100;
    return content.subString(0, maxCharCount);
  }
}