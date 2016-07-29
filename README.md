# up.js

`up.js` allows to asynchronously load resources(css, js, images, etc.) on demand.

* Copyright (c) 2015 Aliaksandr Pyrkh
* License: MIT

## Installation

Download `up.js` manually or install via `npm`:

<pre>
npm install -S git://github.com/apyrkh/up.js.git
</pre>

## How to use

<pre lang="js">
var up = require('up.js')
</pre>

### Loading script elements

Load scripts asynchronously, but apply them in right order.

<pre lang="html">
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
&lt;script&gt;
up
  .link('import', 'path/to/your/file1.html')
  .link('import', 'path/to/your/file2.html')
  ...
&lt;/script&gt;
</pre>
