// up.js v.0.1
// Designed for loading resources on demand
// Copyright 2014-2015, Alexander Pyrkh
(function (window, document) {
  'use strict';

  var up = {};

  function renderLink(rel, href) {
    var link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    document.body.appendChild(link);
  }

  // append a JS resource to the document
  up.js = function (src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.appendChild(script);

    return up;
  };

  // append a CSS resource to the document
  up.css = function (href) {
    renderLink('stylesheet', href);

    return up;
  };

  // prefetch a resource
  up.pre = function (href) {
    renderLink('prefetch', href);

    return up;
  };

  window.up = up;
})(window, document);