(function(window) {
  const document = window.document;
  const createElement = 'createElement';
  const appendChild = 'appendChild';
  window['up'] = {
    // append a JS element to the document
    js: function(src, onLoad, async) {
      const script = document[createElement]('script');
      script.src = src;
      script.onload = onLoad;
      script.async = async;
      document.head[appendChild](script);
      return this;
    },

    // append a link element to the document
    link: function(rel, href) {
      const link = document[createElement]('link');
      link.rel = rel;
      link.href = href;
      document.head[appendChild](link);
      return this;
    }
  };
})(window);
