# up.js

`up.js` allows to asynchronously load resources(css, js, images, etc.) on demand.

* Copyright (c) 2015 Aliaksandr Pyrkh
* License: MIT

## Installation

Download `up.js` manually or install via `bower`:

<pre>
bower install https://github.com/apyrkh/up.js.git#1.0
</pre>

## How to use

Include the script into your page as inline script or load it as a resource:
<pre lang="html">
&lt;script src="/path/to/up.min.js"&gt;&lt;/script&gt;
</pre>

or

<pre lang="html">
&lt;script src="/bower_components/up.js/up.min.js"&gt;&lt;/script&gt;
</pre>

Once you have included up.js you will be able to use `window.up` variable (or just `up`) that contains functions `up.js` and `up.link`.

### Loading script elements

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

### Loading link elements

#### Loading css files

Load styles asynchronously, but apply them in right order.

<pre lang="html">
&lt;script src="path/to/up.js"&gt;&lt;/script&gt;
&lt;script&gt;
up
  .link('stylesheet', 'path/to/your/styles1.css')
  .link('stylesheet', 'path/to/your/styles2.css')
  ...
&lt;/script&gt;
</pre>

#### Prefetch resources

Load resources asynchronously. 
It can be used to prefetch necessary resources beforehand.

<pre lang="html">
&lt;script src="path/to/up.js"&gt;&lt;/script&gt;
&lt;script&gt;
up
  .link('prefetch', 'path/to/your/resource.css')
  .link('prefetch', 'path/to/your/resource.js')
  .link('prefetch', 'path/to/your/resource.png')
  ...
&lt;/script&gt;
</pre>

#### Import resources

Load html files asynchronously.
It can be used to include and reuse HTML documents in other HTML documents.

<pre lang="html">
&lt;script src="path/to/up.js"&gt;&lt;/script&gt;
&lt;script&gt;
up
  .link('import', 'path/to/your/file1.html')
  .link('import', 'path/to/your/file2.html')
  .link('import', 'path/to/your/file3.html')
  ...
&lt;/script&gt;
</pre>
