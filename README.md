# up.js

`up.js` allows to asynchronously load resources(css, js, images, etc.) on demand.

* Copyright 2015 @apyrkh
* License: MIT

## How to use

Include the script into your page as inline script or load it as a resource:
<pre lang="html">
&lt;script src="path/to/up.js"&gt;&lt;/script&gt;
</pre>

Once you have included up.js you will be able to use `window.up` variable (or just `up`) that contains functions `up.css`, `up.js` and `up.pre`.

### Loading css files

Load styles asynchronously, but apply them in right order.

<pre lang="html">
&lt;script src="path/to/up.js"&gt;&lt;/script&gt;
&lt;script&gt;
up
  .css('path/to/your/styles1.css')
  .css('path/to/your/styles2.css')
  ...
&lt;/script&gt;
</pre>

### Loading js files

Load scripts asynchronously, but apply them in right order.

<pre lang="html">
&lt;script src="path/to/up.js"&gt;&lt;/script&gt;
&lt;script&gt;
up
  .js('path/to/your/script1.js')
  .js('path/to/your/script2.js')
  ...
&lt;/script&gt;
</pre>

### Prefetch resources

Load resources asynchronously. 
It can be used to prefetch necessary resources beforehand.

<pre lang="html">
&lt;script src="path/to/up.js"&gt;&lt;/script&gt;
&lt;script&gt;
up
  .pre('path/to/your/resource.css')
  .pre('path/to/your/resource.js')
  .pre('path/to/your/resource.png')
  ...
&lt;/script&gt;
</pre>