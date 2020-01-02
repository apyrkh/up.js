# up.js

`up.js` allows to load/prefetch resources(css, js, images, etc.) in right order.

* Copyright (c) 2015 Aliaksandr Pyrkh
* License: MIT

## Installation

Download `up.js` manually or install via `npm`:

```
npm install -S up.js
```

## How to use

```
up.js(url, onLoad)
up.link(rel, href)
```

### Loading script elements

Load scripts, but apply them in right order.

```javascript
up
  .js('path/to/your/script1.js', function() { console.log('script1 loaded') })
  .js('path/to/your/script2.js', function() { console.log('script2 loaded') })
  .js('path/to/your/script3.js', function() { console.log('script3 loaded') })
  // ...
```

### Loading link elements

#### Loading css files

Load styles, but apply them in right order.

```javascript
up
  .link('stylesheet', 'path/to/your/styles1.css')
  .link('stylesheet', 'path/to/your/styles2.css')
  .link('stylesheet', 'path/to/your/styles3.css')
  // ...
```

#### Prefetch resources

Load resources. 
It can be used to prefetch necessary resources beforehand.

```javascript
up
  .link('prefetch', 'path/to/your/resource.css')
  .link('prefetch', 'path/to/your/resource.js')
  .link('prefetch', 'path/to/your/resource.png')  
  // ...
```

#### Import resources

Load html files.
It can be used to include and reuse HTML documents in other HTML documents.

```javascript
up
  .link('import', 'path/to/your/file1.html')
  .link('import', 'path/to/your/file2.html')
  .link('import', 'path/to/your/file3.html')
  // ...
```
