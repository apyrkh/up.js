const document = window.document;
const createElement = 'createElement';
const head = 'head';
const appendChild = 'appendChild';

module.exports = {
  js: function(src, onLoad) {
    const script = document[createElement]('script');
    script.src = src;
    script.onload = onLoad;
    script.async = 0;
    document[head][appendChild](script);
    return this;
  },

  link: function(href, rel) {
    const link = document[createElement]('link');
    link.href = href;
    link.rel = rel;
    document[head][appendChild](link);
    return this;
  }
};
